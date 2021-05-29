import getRedisClient from '../get-redis-client'
import { get, lrange, rpush } from '../redis-promise'
// import { getWebsocketServer } from '../websocket-server'

export function userConvoKey(userId) {
  return `users:${userId}:convo`
}

export function convoUsersKey(convoId) {
  return `convos:${convoId}:users`
}

function convoMessagesKey(convoId) {
  return `convos:${convoId}:messages`
}

export function getUserConvoId({ userId }) {
  const client = getRedisClient()
  return get(client, userConvoKey(userId))
}

export async function addUserMessage({ userId, text }) {
  const client = getRedisClient()
  const convoId = await getUserConvoId({ userId })
  const key = convoMessagesKey(convoId)
  const d = JSON.stringify({ userId, text })
  rpush(client, key, d)
  return true
}

export async function getConvoMessages({ convoId }) {
  const client = getRedisClient()
  const key = convoMessagesKey(convoId)
  const res = await lrange(client, key, 0, -1)
  return res.map(el => JSON.parse(el))
}

export async function getConvoUsers({ convoId }) {
  const client = getRedisClient()
  const key = convoUsersKey(convoId)
  const res = await get(client, key)
  return JSON.parse(res)
}
