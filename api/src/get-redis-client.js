import redis from 'redis'
import { stubIfTest } from 'dummee'

const client = redis.createClient()
client.on('error', (error) => {
  console.error(error)
})

function getClient() {
  return client
}

export default stubIfTest(getClient)
