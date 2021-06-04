import WebSocket from 'ws'
import cookie from 'cookie'
import getQueueStatusText from '_/models/queue/get-queue-status-text'

let wsServer = null
/* eslint-disable-next-line no-unused-vars */
export const socketsByUserId = {}

export function initWebsocketServer({ server }) {
  wsServer = new WebSocket.Server({ server })
  wsServer.on('connection', (ws, req) => {
    const { userId } = cookie.parse(req.headers.cookie) || {}
    const userSockets = socketsByUserId[userId] || []
    socketsByUserId[userId] = userSockets
    userSockets.push(ws)
    // ws.on('message', (message) => {
    //   console.log('received: %s', message)
    // })
    ws.on('close', () => {
      const i = userSockets.indexOf(ws)
      if (i !== -1) {
        userSockets.splice(i, 1)
      }
    })
  })
}

export function getWebsocketServer() {
  return wsServer
}

export function getUserSockets({ userId }) {
  return socketsByUserId[userId] || []
}

export function sendSocketsMessage({ userId, text }) {
  getUserSockets({ userId }).forEach((ws) => {
    const type = 'message'
    const msg = JSON.stringify({ text, type })
    ws.send(msg)
  })
}

export function notifySocketsStartConvo({ userId, partnerNickname }) {
  getUserSockets({ userId }).forEach((ws) => {
    const type = 'start-convo'
    const msg = JSON.stringify({ type, partnerNickname })
    ws.send(msg)
  })
}

export function notifySocketsLeaveConvo({ userId }) {
  getUserSockets({ userId }).forEach((ws) => {
    const type = 'leave-convo'
    const msg = JSON.stringify({ type })
    ws.send(msg)
  })
}

export async function notifySocketsQueueChange() {
  const queueStatus = await getQueueStatusText()
  const keys = Object.keys(socketsByUserId)
  keys.forEach((key) => {
    socketsByUserId[key].forEach((ws) => {
      const type = 'queue-change'
      const msg = JSON.stringify({ type, queueStatus })
      ws.send(msg)
    })
  })
}
