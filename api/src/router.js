import getStatus from './controllers/self/get-status'
import joinQueue from './controllers/queue/join-queue'
import leaveQueue from './controllers/queue/leave-queue'
import getMessages from './controllers/chat/get-messages'
import sendMessage from './controllers/chat/send-message'
import leaveConvo from './controllers/chat/leave-convo'
import setRole from './controllers/self/set-role'

export function router() {
  return async (ctx, next) => {
    if (!ctx.userId) {
      ctx.status = 401
    } else {
      if (ctx.path === '/api/self/status') {
        await getStatus({ ctx })
      }
      if (ctx.path === '/api/queue/join' && ctx.method === 'POST') {
        await joinQueue({ ctx })
      }
      if (ctx.path === '/api/queue/leave' && ctx.method === 'POST') {
        await leaveQueue({ ctx })
      }
      if (ctx.path === '/api/chat/messages' && ctx.method === 'GET') {
        await getMessages({ ctx })
      }
      if (ctx.path === '/api/chat/messages' && ctx.method === 'POST') {
        await sendMessage({ ctx })
      }
      if (ctx.path === '/api/chat/leave' && ctx.method === 'POST') {
        await leaveConvo({ ctx })
      }
      if (ctx.path === '/api/self/role' && ctx.method === 'PUT') {
        await setRole({ ctx })
      }
    }
    return next()
  }
}
