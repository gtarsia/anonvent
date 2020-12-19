import { ref } from 'vue'
import { hydrateMessages, clearMessages } from './messages'
import { setRole, roleRef } from './role'
import getStatus from '/@/api/self/get-status'
import leaveReq from '/@/api/chat/leave'
import queueReq from '/@/api/chat/queue'

export const selfNicknameRef = ref('')
export const partnerNicknameRef = ref('')
export const isMatchedRef = ref(false)
export const isFindingRef = ref(false)

export async function queue() {
  isFindingRef.value = true
  return queueReq()
}

export async function hydrate() {
  // const socket = new WebSocket('ws://127.0.0.1:3000')
  // socket.onmessage = function(event) {
  //   console.log(event)
  // }
  // socket.onopen = function (event) {
  //   socket.send("Here's some text that the server is urgently awaiting!")
  // }
  const { isMatched, partnerNickname, role, nickname } = await getStatus()
  selfNicknameRef.value = nickname
  setRole(role)
  if (isMatched) {
    hydrateMessages()
    partnerNicknameRef.value = partnerNickname
    roleRef.value = role
  }
  isMatchedRef.value = isMatched
}

export async function leave() {
  await leaveReq()
  clearMessages()
  isMatchedRef.value = false
}
