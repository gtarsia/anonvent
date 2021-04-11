import { get, set } from '../redis-promise'
import getRedisClient from '../get-redis-client'

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
