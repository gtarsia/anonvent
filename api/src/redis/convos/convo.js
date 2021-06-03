import getRedisClient from '_/get-redis-client'
import { get, lrange, rpush } from '_/redis-promise'
// import { getWebsocketServer } from '../websocket-server'
import { userConvoKey, convoMessagesKey, convoUsersKey } from './keys'

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

export async function getConvoPartner({ userId }) {
  const convoId = await getUserConvoId({ userId })
  if (!convoId) {
    return null
  }
  const users = await getConvoUsers({ convoId })
  return users.venter === userId ? users.listener : users.venter
}
