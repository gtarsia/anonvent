import { stubIfTest } from 'dummee'
import { addUserMessage, getConvoPartner } from '_/redis/convos/convo'
import readBody from '_/read-body'
import { sendSocketsMessage } from '_/websocket-server'

async function sendMessage({ ctx }) {
  const { userId } = ctx
  const { text } = await readBody({ ctx })
  ctx.body = addUserMessage({ userId, text })
  const receiverId = await getConvoPartner({ userId })
  sendSocketsMessage({ userId: receiverId, text })
}

export default stubIfTest(sendMessage)
