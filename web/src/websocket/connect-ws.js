import { stubIfTest } from 'dummee'

function connectWs() {
  const socket = new WebSocket('ws://localhost:3030/api')
  socket.onmessage = function(event) {
    console.log(event)
  }
  socket.onopen = function (event) {
    socket.send("Here's some text that the server is urgently awaiting!")
  }
}

export default stubIfTest(connectWs)
