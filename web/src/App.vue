<template>
  <div class="h-screen flex flex-col bg-gray-50">
    <Navbar />
    <ChatActions />
    <RolePicker v-if="showRolePickerRef" />
    <ChatMessages v-if="isMatchedRef"/>
    <ChatInput v-if="isMatchedRef"/>
  </div>
</template>

<script>
import RolePicker from './components/role-picker/Component.vue'
import Navbar from './components/navbar/Component.vue'
import ChatActions from './components/chat-actions/Component.vue'
import ChatMessages from './components/chat-messages/Component.vue'
import ChatInput from './components/chat-input/Component.vue'
import { isMatchedRef, hydrate } from './store/store'
import { showRolePickerRef } from './store/role'

function setup() {
  hydrate()
  return { showRolePickerRef, isMatchedRef }
}

const name = 'App'
const components = { Navbar, ChatActions, RolePicker, ChatMessages, ChatInput }

export default { name, components, setup }
</script>
