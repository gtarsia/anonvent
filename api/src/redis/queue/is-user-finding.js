import { stubIfTest } from 'dummee'
import { zscore } from '_/redis-promise'
import getRedisClient from '_/get-redis-client'
import { listenerQueueKey, venterQueueKey } from './keys'

async function isUserFinding({ userId }) {
  const client = getRedisClient()
  const [listenerScore, venterScore] = await Promise.all([
    zscore(client, listenerQueueKey, userId),
    zscore(client, venterQueueKey, userId),
  ])
  return listenerScore !== null || venterScore !== null
}

export default stubIfTest(isUserFinding)
