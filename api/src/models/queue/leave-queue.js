import { stubIfTest } from 'dummee'
import leaveQueueRedis from '_/redis/queue/leave-queue'
import { notifySocketsQueueChange } from '_/websocket-server'

async function leaveQueue({ userId }) {
  await leaveQueueRedis({ userId })
  notifySocketsQueueChange()
}

export default stubIfTest(leaveQueue)
