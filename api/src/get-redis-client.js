import redis from 'redis'
import { stubIfTest } from 'dummee'

let client = null

function getRedisClient() {
  if (client === null) {
    client = redis.createClient()
    client.on('error', (error) => {
      console.error(error)
    })
  }
  return client
}

export default stubIfTest(getRedisClient)
