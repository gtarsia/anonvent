import { stubIfTest } from 'dummee'
import { getUserRole } from '_/redis/users/role'
import findMatch from '_/models/queue/find-match'

async function joinQueue({ ctx }) {
  const { userId } = ctx
  const role = await getUserRole({ userId })
  ctx.body = await findMatch({ userId, role })
}

export default stubIfTest(joinQueue)
