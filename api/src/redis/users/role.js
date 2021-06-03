import { get, set } from '_/redis-promise'
import getRedisClient from '_/get-redis-client'

function getUserRoleKey(userId) {
  return `users:${userId}:role`
}

export function getUserRole({ userId }) {
  const client = getRedisClient()
  return get(client, getUserRoleKey(userId))
}

export function setUserRole({ userId, role }) {
  const client = getRedisClient()
  return set(client, getUserRoleKey(userId), role)
}
