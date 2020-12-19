import api from '/@/lib/api'

export default async function queue() {
  const method = 'PUT'
  return api('queue', { method })
}
