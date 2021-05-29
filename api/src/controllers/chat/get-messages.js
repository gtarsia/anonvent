import { stubIfTest } from 'dummee'
import { getUserMessages } from '../../users/convo'

async function getMessages({ ctx }) {
  const { userId } = ctx
  ctx.body = await getUserMessages({ userId })
}

export default stubIfTest(getMessages)
