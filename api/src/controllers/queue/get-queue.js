import { stubIfTest } from 'dummee'
import { getUserRole } from '../../users/role'
import { findMatch } from '../../queue'

async function getQueue({ ctx }) {
  const { userId } = ctx
  const role = await getUserRole({ userId })
  findMatch({ userId, role })
  ctx.body = true
}

export default stubIfTest(getQueue)
