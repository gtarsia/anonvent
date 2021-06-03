import getRedisClient from '_/get-redis-client'
import { del } from '_/redis-promise'
import { userConvoKey } from './keys'

export default async function leaveConvo(requester) {
  const client = getRedisClient()
  return del(client, userConvoKey(requester.userId))
}
