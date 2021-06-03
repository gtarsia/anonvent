import { stubIfTest } from 'dummee'
import leaveQueueRedis from '_/redis/queue/leave-queue'

function leaveQueue({ userId }) {
  leaveQueueRedis({ userId })
}

export default stubIfTest(leaveQueue)
