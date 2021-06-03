import { stubIfTest } from 'dummee'
import { zpopmin } from '_/redis-promise'
import getRedisClient from '_/get-redis-client'
import startConvo from '_/redis/convos/start-convo'
import { queueKey } from './keys'
import joinQueue from './join-queue'

async function findMatch({ role, userId }) {
  const client = getRedisClient()
  const oppositeRole = role === 'listener' ? 'venter' : 'listener'
  const oppositeQueueKey = queueKey(oppositeRole)
  const [partnerId] = await zpopmin(client, oppositeQueueKey) || []
  if (partnerId === null || partnerId === undefined) {
    await joinQueue({ role, userId })
    return false
  }
  await startConvo({ role, userId }, { role: oppositeRole, userId: partnerId })
  return { userId: partnerId }
}

export default stubIfTest(findMatch)
