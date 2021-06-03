import getRedisClient from '_/get-redis-client'
import { zadd, zpopmin } from '_/redis-promise'
import startConvo from '_/redis/convos/start-convo'

function queueKey(role) {
  return `queues:${role}`
}

export function joinQueue({ role, userId }) {
  const client = getRedisClient()
  const key = queueKey(role)
  return zadd(client, key, Date.now(), userId)
}

export async function findMatch({ role, userId }) {
  const client = getRedisClient()
  const oppositeRole = role === 'listener' ? 'venter' : 'listener'
  const oppositeQueueKey = queueKey(oppositeRole)
  const [partnerId] = await zpopmin(client, oppositeQueueKey) || []
  if (partnerId === null || partnerId === undefined) {
    return joinQueue({ role, userId })
  }
  return startConvo({ role, userId }, { role: oppositeRole, userId: partnerId })
}
