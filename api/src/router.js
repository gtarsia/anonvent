import getStatus from './controllers/self/get-status'
import setRole from './controllers/self/set-role'
import getMessages from './controllers/chat/get-messages'
import sendMessage from './controllers/chat/send-message'
import getQueue from './controllers/queue/get-queue'

export function router() {
  return async (ctx, next) => {
    if (!ctx.userId) {
      ctx.status = 401
    } else {
      if (ctx.path === '/api/self/status') {
        await getStatus({ ctx })
      }
      if (ctx.path === '/api/queue') {
        await getQueue({ ctx })
      }
      if (ctx.path === '/api/chat/messages' && ctx.method === 'GET') {
        await getMessages({ ctx })
      }
      if (ctx.path === '/api/chat/messages' && ctx.method === 'POST') {
        await sendMessage({ ctx })
      }
      if (ctx.path === '/api/self/role' && ctx.method === 'PUT') {
        await setRole({ ctx })
      }
    }
    return next()
  }
}
