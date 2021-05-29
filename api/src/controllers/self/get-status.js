import { stubIfTest } from 'dummee'
import { getUserRole } from '../../users/role'
import { getUserConvoId, getConvoUsers } from '../../convos/convo'
import { getUserNickname } from '../../users/nickname'

async function getStatus({ ctx }) {
  const { userId } = ctx
  const results = await Promise.all([
    getUserNickname({ userId }),
    getUserConvoId({ userId }),
    getUserRole({ userId }),
  ])
  const [nickname, convoId, role] = results
  const isMatched = Boolean(convoId)
  let partnerNickname = null
  if (isMatched) {
    const { listener, venter } = await getConvoUsers({ convoId })
    const partnerId = role === 'listener' ? venter : listener
    partnerNickname = await getUserNickname({ userId: partnerId })
  }
  ctx.body = { isMatched, convoId, nickname, role, partnerNickname }
}

export default stubIfTest(getStatus)
