import { stubIfTest } from 'dummee'
import { zadd } from '_/redis-promise'
import getRedisClient from '_/get-redis-client'
import { queueKey } from './keys'

function joinQueue({ role, userId }) {
  const client = getRedisClient()
  const key = queueKey(role)
  return zadd(client, key, Date.now(), userId)
}

export default stubIfTest(joinQueue)
