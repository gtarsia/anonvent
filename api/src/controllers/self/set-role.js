import { stubIfTest } from 'dummee'
import readBody from '../../read-body'
import { setUserRole } from '../../users/role'

async function setRole({ ctx }) {
  const { userId } = ctx
  const { role } = await readBody({ ctx })
  setUserRole({ userId, role })
  ctx.body = true
}

export default stubIfTest(setRole)
