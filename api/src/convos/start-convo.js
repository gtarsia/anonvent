import getRedisClient from '../get-redis-client'
import { execMulti } from '../redis-promise'
import { hex16 } from '../random'
import { userConvoKey, convoUsersKey } from './convo'

export default function startConvo(requester, partner) {
  const client = getRedisClient()
  const convoId = hex16()
  const convo = { [requester.role]: requester.userId, [partner.role]: partner.userId }
  const chain = client.multi()
    .set(userConvoKey(requester.userId), convoId)
    .set(userConvoKey(partner.userId), convoId)
    .set(convoUsersKey(convoId), JSON.stringify(convo))
  return execMulti(chain)
}
