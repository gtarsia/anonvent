import { stubIfTest } from 'dummee'
import api from '/@/lib/api'

function leaveQueue() {
  const method = 'POST'
  return api('queue/leave', { method })
}

export default stubIfTest(leaveQueue)
