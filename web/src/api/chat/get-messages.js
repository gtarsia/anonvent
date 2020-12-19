import api from '/@/lib/api'

export default function getMessages() {
  return api('chat/messages')
}
