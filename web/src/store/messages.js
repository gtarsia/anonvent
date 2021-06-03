import { ref, isRef } from 'vue'
import { last } from 'lodash-es'
import mitt from 'mitt'
import getMessages from '/@/api/chat/get-messages'
import sendMessageReq from '/@/api/chat/send-message'

export const messageGroupsRef = ref([])
export const messageEvents = mitt()

function refineGroupMessages(group) {
  group.messagesRef = ref(group.messages)
  delete group.messages
}

export async function hydrateMessages() {
  const messageGroups = await getMessages()
  messageGroups.forEach(refineGroupMessages)
  messageGroupsRef.value = messageGroups
}

export async function clearMessages() {
  messageGroupsRef.value = []
}

export function sendMessage(text) {
  sendMessageReq(text)
  const lastGroup = last(messageGroupsRef.value)
  if (lastGroup && lastGroup.mine) {
    lastGroup.messagesRef.push({ text })
  } else {
    const group = { mine: true, messagesRef: ref([{ text }]) }
    messageGroupsRef.value.push(group)
  }
  messageEvents.emit('push')
}

export function receiveMessage(message) {
  const { text } = message
  const lastGroup = last(messageGroupsRef.value)
  if (lastGroup && !lastGroup.mine) {
    lastGroup.messagesRef.push({ text })
  } else {
    const group = { mine: false, messagesRef: ref([{ text }]) }
    messageGroupsRef.value.push(group)
  }
  messageEvents.emit('push')
}
