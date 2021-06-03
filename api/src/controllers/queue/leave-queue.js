import { stubIfTest } from 'dummee'
import leaveQueueModel from '_/models/queue/leave-queue'

async function leaveQueue({ ctx }) {
  const { userId } = ctx
  await leaveQueueModel({ userId })
  ctx.body = true
}

export default stubIfTest(leaveQueue)
