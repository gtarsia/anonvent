import api from '/@/lib/api'

export default function leave() {
  const method = 'POST'
  return api('chat/leave', { method })
}
