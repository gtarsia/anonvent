import { stubIfTest } from 'dummee'
import leaveConvoRedis from '_/redis/convos/leave-convo'
import { notifySocketsLeaveConvo } from '_/websocket-server'
import { getConvoPartner } from '_/redis/convos/convo'

async function leaveConvo({ userId }) {
  const partnerId = await getConvoPartner({ userId })
  if (partnerId) {
    await leaveConvoRedis({ userId })
    notifySocketsLeaveConvo({ userId: partnerId })
  }
  return false
}

export default stubIfTest(leaveConvo)
