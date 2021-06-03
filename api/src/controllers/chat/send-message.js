import { stubIfTest } from 'dummee'
import { addUserMessage } from '_/redis/convos/convo'
import readBody from '_/read-body'

async function sendMessage({ ctx }) {
  const { userId } = ctx
  const { text } = await readBody({ ctx })
  ctx.body = addUserMessage({ userId, text })
}

export default stubIfTest(sendMessage)
