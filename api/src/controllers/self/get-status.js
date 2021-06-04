import { stubIfTest } from 'dummee'
import { getUserRole } from '_/redis/users/role'
import { getUserConvoId, getConvoUsers } from '_/redis/convos/convo'
import { getUserNickname } from '_/redis/users/nickname'
import isUserFinding from '_/redis/queue/is-user-finding'
import getQueueStatusText from '_/models/queue/get-queue-status-text'

async function getStatus({ ctx }) {
  const { userId } = ctx
  const results = await Promise.all([
    getUserNickname({ userId }),
    getUserConvoId({ userId }),
    getUserRole({ userId }),
    isUserFinding({ userId }),
    getQueueStatusText(),
  ])
  const [nickname, convoId, role, isFinding, queueStatus] = results
  const isMatched = Boolean(convoId)
  let partnerNickname = null
  let didPartnerLeave = null
  if (isMatched) {
    const { listener, venter } = await getConvoUsers({ convoId })
    const partnerId = role === 'listener' ? venter : listener
    partnerNickname = await getUserNickname({ userId: partnerId })
    didPartnerLeave = await getUserConvoId({ userId: partnerId }) !== convoId
  }
  ctx.body = { isMatched, convoId, nickname, role, partnerNickname, didPartnerLeave, isFinding, queueStatus }
}

export default stubIfTest(getStatus)
