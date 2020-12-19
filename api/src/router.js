import { getUserNickname } from './users/nickname'
import { getUserConvoId, addUserMessage, getConvoUsers } from './convos/convo'
import { getUserMessages } from './users/convo'
import { getUserRole, setUserRole } from './users/role'
import { findMatch } from './queue'
import readBody from './read-body'

async function getStatus({ ctx }) {
  const { userId } = ctx
  const results = await Promise.all([
    getUserNickname({ userId }),
    getUserConvoId({ userId }),
    getUserRole({ userId }),
  ])
  const [nickname, convoId, role] = results
  const isMatched = Boolean(convoId)
  let partnerNickname = null
  if (isMatched) {
    debugger
    const { listener, venter } = await getConvoUsers({ convoId })
    const partnerId = role === 'listener' ? venter : listener
    partnerNickname = await getUserNickname({ userId: partnerId })
  }
  ctx.body = { isMatched, convoId, nickname, role, partnerNickname }
}

async function getMessages({ ctx }) {
  const { userId } = ctx
  ctx.body = await getUserMessages({ userId })
}

async function sendMessage({ ctx }) {
  const { userId } = ctx
  const { text } = await readBody({ ctx })
  ctx.body = addUserMessage({ userId, text })
}

async function setRole({ ctx }) {
  const { userId } = ctx
  const { role } = await readBody({ ctx })
  setUserRole({ userId, role })
  ctx.body = true
}

async function queue({ ctx }) {
  const { userId } = ctx
  const role = await getUserRole({ userId })
  findMatch({ userId, role })
  ctx.body = true
}

export function router() {
  return async (ctx, next) => {
    if (!ctx.userId) {
      ctx.status = 401
    } else {
      if (ctx.path === '/api/self/status') {
        await getStatus({ ctx })
      }
      if (ctx.path === '/api/queue') {
        await queue({ ctx })
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
