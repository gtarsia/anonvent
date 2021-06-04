import { stubIfTest } from 'dummee'
import { receiveMessage } from '/@/store/messages'
import { receiveStartConvo, receiveLeaveConvo, queueStatusRef } from '/@/store/store'

function connectWs() {
  let { location: { hostname, port, protocol } } = window
  protocol = protocol === 'https:' ? 'wss' : 'ws'
  port = port ? `:${port}` : port
  const socket = new WebSocket(`${protocol}://${hostname}${port}/api`)
  socket.onmessage = function(event) {
    const wsMessage = JSON.parse(event.data)
    if (wsMessage.type === 'message') {
      receiveMessage(wsMessage)
    }
    if (wsMessage.type === 'start-convo') {
      receiveStartConvo(wsMessage)
    }
    if (wsMessage.type === 'leave-convo') {
      receiveLeaveConvo(wsMessage)
    }
    if (wsMessage.type === 'queue-change') {
      queueStatusRef.value = wsMessage.queueStatus
    }
  }
  socket.onopen = function (event) {
    socket.send("Here's some text that the server is urgently awaiting!")
  }
}

export default stubIfTest(connectWs)
