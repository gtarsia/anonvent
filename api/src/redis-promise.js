
function promisify(fn) {
  return new Promise((resolve, reject) => {
    fn((err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

export function multi(chain) {
  return promisify(cb => chain.exec(cb))
}
export function get(client, ...args) {
  return promisify(cb => client.get(...args, cb))
}
export function set(client, ...args) {
  return promisify(cb => client.set(...args, cb))
}
export function lpush(client, ...args) {
  return promisify(cb => client.lpush(...args, cb))
}
export function rpush(client, ...args) {
  return promisify(cb => client.rpush(...args, cb))
}
export function lrange(client, ...args) {
  return promisify(cb => client.lrange(...args, cb))
}
export function zadd(client, ...args) {
  return promisify(cb => client.zadd(...args, cb))
}
export function zcard(client, ...args) {
  return promisify(cb => client.zcard(...args, cb))
}
export function zpopmin(client, ...args) {
  return promisify(cb => client.zpopmin(...args, cb))
}
