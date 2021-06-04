import { stubIfTest } from 'dummee'
import { zcount } from '_/redis-promise'
import getRedisClient from '_/get-redis-client'
import { listenerQueueKey, venterQueueKey } from './keys'

async function getQueueStatusText() {
  const client = getRedisClient()
  const [listenerCount, venterCount] = await Promise.all([
    zcount(client, listenerQueueKey, '-inf', '+inf'),
    zcount(client, venterQueueKey, '-inf', '+inf'),
  ])
  if (listenerCount > 0) {
    return `${listenerCount} listeners on queue`
  }
  if (venterCount > 0) {
    return `${venterCount} venters on queue`
  }
  return '0 people on queue'
}

export default stubIfTest(getQueueStatusText)
