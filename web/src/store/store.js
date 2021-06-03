import { ref } from 'vue'
import { hydrateMessages, clearMessages } from './messages'
import { setRole, roleRef } from './role'
import getStatus from '/@/api/self/get-status'
import leaveReq from '/@/api/chat/leave'
import joinQueueReq from '/@/api/chat/join-queue'
import leaveQueueReq from '/@/api/chat/leave-queue'
import connectWs from '/@/websocket/connect-ws'

export const selfNicknameRef = ref('')
export const partnerNicknameRef = ref('')
export const didPartnerLeaveRef = ref(false)
export const isMatchedRef = ref(false)
export const isFindingRef = ref(false)

export async function joinQueue() {
  isFindingRef.value = true
  const result = await joinQueueReq()
  if (result !== false) {
    const { partnerNickname } = result
    partnerNicknameRef.value = result.partnerNickname
    isMatchedRef.value = true
    isFindingRef.value = false
    didPartnerLeaveRef.value = false
  }
}

export function leaveQueue() {
  isFindingRef.value = false
  return leaveQueueReq()
}

export async function hydrate() {
  const { isMatched, partnerNickname, role, nickname, didPartnerLeave, isFinding } = await getStatus()
  connectWs()
  selfNicknameRef.value = nickname
  setRole(role)
  if (isMatched) {
    hydrateMessages()
    partnerNicknameRef.value = partnerNickname
    didPartnerLeaveRef.value = didPartnerLeave
    roleRef.value = role
  }
  isFindingRef.value = isFinding
  isMatchedRef.value = isMatched
}

export async function leave() {
  await leaveReq()
  clearMessages()
  isMatchedRef.value = false
}

export function receiveStartConvo({ partnerNickname }) {
  isFindingRef.value = false
  isMatchedRef.value = true
  partnerNicknameRef.value = partnerNickname
  didPartnerLeaveRef.value = false
}

export function receiveLeaveConvo() {
  didPartnerLeaveRef.value = true
}
