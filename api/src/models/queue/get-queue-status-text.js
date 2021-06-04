import { stubIfTest } from 'dummee'
import getQueueStatusTextRedis from '_/redis/queue/get-queue-status-text'

function getQueueStatusText() {
  return getQueueStatusTextRedis()
}

export default stubIfTest(getQueueStatusText)
