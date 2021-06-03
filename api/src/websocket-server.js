import WebSocket from 'ws'

let wsServer = null

export function initWebsocketServer({ server }) {
  wsServer = new WebSocket.Server({ server })
  wsServer.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message)
    })
  })
}

export function getWebsocketServer() {
  return wsServer
}
