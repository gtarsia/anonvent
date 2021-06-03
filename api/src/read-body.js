
export default function readBody({ ctx }) {
  const { request: { req } } = ctx
  return new Promise((resolve) => {
    let body = ''
    req.on('readable', () => {
      const d = req.read()
      if (d) {
        body += d
      }
    })
    req.on('end', () => {
      resolve(body ? JSON.parse(body) : {})
    })
  })
}
