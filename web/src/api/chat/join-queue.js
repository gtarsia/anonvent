import api from '/@/lib/api'

export default async function joinQueue() {
  const method = 'POST'
  return api('queue/join', { method })
}
