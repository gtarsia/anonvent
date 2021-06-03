import { stubIfTest } from 'dummee'
import readBody from '_/read-body'
import { setUserRole } from '_/redis/users/role'

async function setRole({ ctx }) {
  const { userId } = ctx
  const { role } = await readBody({ ctx })
  setUserRole({ userId, role })
  ctx.body = true
}

export default stubIfTest(setRole)
