import { ref } from 'vue'

function setup() {
  const showMobileMenuRef = ref(false)
  return { showMobileMenuRef }
}

export default { setup }
