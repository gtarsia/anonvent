import { stubIfTest } from 'dummee'
import leaveConvoModel from '_/models/convos/leave-convo'

async function leaveConvo({ ctx }) {
  const { userId } = ctx
  await leaveConvoModel({ userId })
  ctx.body = true
}

export default stubIfTest(leaveConvo)
