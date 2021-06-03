import { stubIfTest } from 'dummee'
import getRedisClient from '_/get-redis-client'
import { zrem } from '_/redis-promise'
import { listenerQueueKey, venterQueueKey } from './keys'

function leaveQueue({ userId }) {
  const client = getRedisClient()
  return Promise.all([
    zrem(client, listenerQueueKey, userId),
    zrem(client, venterQueueKey, userId),
  ])
}

export default stubIfTest(leaveQueue)
