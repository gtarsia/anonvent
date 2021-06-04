import { stubIfTest } from 'dummee'
import findMatchRedis from '_/redis/queue/find-match'
import { notifySocketsStartConvo, notifySocketsQueueChange } from '_/websocket-server'
import { getUserNickname } from '_/redis/users/nickname'

async function findMatch({ userId, role }) {
  const result = await findMatchRedis({ userId, role })
  notifySocketsQueueChange()
  if (result !== false) {
    // result should be { userId }
    const { userId: partnerId } = result
    const partnerNickname = await getUserNickname({ userId: partnerId })
    const userNickname = await getUserNickname({ userId })
    notifySocketsStartConvo({ userId: partnerId, partnerNickname: userNickname })
    return { partnerNickname }
  }
  return false
}

export default stubIfTest(findMatch)
