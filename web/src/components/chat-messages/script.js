import { ref } from 'vue'
import { messageGroupsRef, messageEvents } from '/@/store/messages'
import { selfNicknameRef, partnerNicknameRef } from '/@/store/store'

function setup() {
  const messagesElRef = ref()
  messageEvents.on('push', () => {
    const el = messagesElRef.value
    setTimeout(() => {
      el.scrollTop = el.scrollHeight
    })
  })
  return { messagesElRef, messageGroupsRef, selfNicknameRef, partnerNicknameRef }
}

export default { setup }
