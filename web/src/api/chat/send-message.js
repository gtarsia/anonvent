import api from '/@/lib/api'

export default function sendMessage(text) {
  const method = 'POST'
  const json = { text }
  return api('chat/messages', { method, json })
}
