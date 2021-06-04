import { ref } from 'vue'
import { selfNicknameRef } from '/@/store/store'

function setup() {
  const showMobileMenuRef = ref(false)
  return { showMobileMenuRef, selfNicknameRef }
}

export default { setup }
