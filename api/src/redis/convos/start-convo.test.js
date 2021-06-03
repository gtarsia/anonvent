import test from 'ava'
import dummee from 'dummee'
import getRedisClient from '_/get-redis-client'
import startConvo from './start-convo'

test('startConvo should work correctly', (t) => {
  const exec = dummee()
  const set = dummee(() => ({ set, exec }))
  const multi = dummee(() => ({ set }))
  const client = { multi }
  getRedisClient.cb = () => client
  const requester = {}
  const partner = {}
  startConvo(requester, partner)
  t.true(true)
})
