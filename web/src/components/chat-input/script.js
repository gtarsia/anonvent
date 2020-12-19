import { ref } from 'vue'
import { sendMessage } from '/@/store/messages'

function setup() {
  const inputRef = ref('')
  function onKeydown(event) {
    const { shiftKey, keyCode } = event
    const isEnter = keyCode === 13
    if (isEnter && !shiftKey) {
      event.preventDefault()
      sendMessage(inputRef.value)
      inputRef.value = ''
    }
  }
  return { inputRef, onKeydown }
}

export default { setup }
