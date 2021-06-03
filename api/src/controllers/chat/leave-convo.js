import { stubIfTest } from 'dummee'
import leaveConvoRedis from '_/redis/convos/leave-convo'

function leaveConvo({ ctx }) {
  const { userId } = ctx
  return leaveConvoRedis({ userId })
}

export default stubIfTest(leaveConvo)
