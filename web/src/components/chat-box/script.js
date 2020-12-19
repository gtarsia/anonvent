import { nicknameRef } from '/@/store/store'
import VentMessages from './messages/Component.vue'
import VentInput from './input/Component.vue'

function setup() {
  return { nicknameRef }
}

const components = { VentMessages, VentInput }

export default { components, setup }
