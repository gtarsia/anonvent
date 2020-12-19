import { getConvoMessages, getUserConvoId } from '../convos/convo'


export async function getUserMessages({ userId }) {
  const convoId = await getUserConvoId({ userId })
  if (!convoId) {
    return []
  }
  const messages = await getConvoMessages({ convoId })
  if (messages.length === 0) {
    return []
  }
  const result = []
  let lastGroup = null
  messages.forEach((msg) => {
    if (lastGroup === null || lastGroup.userId !== msg.userId) {
      const mine = msg.userId === userId
      lastGroup = { userId: msg.userId, mine, messages: [] }
      result.push(lastGroup)
    }
    lastGroup.messages.push({ text: msg.text })
  })
  return result
}
