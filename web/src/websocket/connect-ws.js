import { stubIfTest } from 'dummee'
import { receiveMessage } from '/@/store/messages'
import { receiveStartConvo, receiveLeaveConvo } from '/@/store/store'

function connectWs() {
  const socket = new WebSocket('ws://localhost:3030/api')
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
  }
  socket.onopen = function (event) {
    socket.send("Here's some text that the server is urgently awaiting!")
  }
}

export default stubIfTest(connectWs)
