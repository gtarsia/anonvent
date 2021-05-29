import { stubIfTest } from 'dummee'
import { addUserMessage } from '../../convos/convo'
import readBody from '../../read-body'

async function sendMessage({ ctx }) {
  const { userId } = ctx
  const { text } = await readBody({ ctx })
  ctx.body = addUserMessage({ userId, text })
}

export default stubIfTest(sendMessage)
