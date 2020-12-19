import { hex16 } from './random'

export function getUserId({ ctx }) {
  return ctx.cookies.get('userId')
}

export function session() {
  return (ctx, next) => {
    let userId = getUserId({ ctx })
    if (!userId) {
      userId = hex16()
      const signed = false
      const maxAge = 86400000 // 1 day
      ctx.cookies.set('userId', userId, { signed, maxAge })
    }
    ctx.userId = userId
    return next()
  }
}
