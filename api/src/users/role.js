import { get, set } from '../redis-promise'
import client from '../redis-client'

function getUserRoleKey(userId) {
  return `users:${userId}:role`
}

export function getUserRole({ userId }) {
  return get(client, getUserRoleKey(userId))
}

export function setUserRole({ userId, role }) {
  return set(client, getUserRoleKey(userId), role)
}
