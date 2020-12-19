import http from 'http'
import Koa from 'koa'
import json from 'koa-json'
import { session } from './session'
import { useWebsockets } from './websocket'
import { router } from './router'

const app = new Koa()
const HOST = 'localhost'
const HTTP_PORT = 3015

app.use(json())
app.use(session())
app.use(router())

function listeningReporter() {
  // `this` refers to the http server here
  const { address, port } = this.address()
  const protocol = this.addContext ? 'https' : 'http'
  console.log(`Listening on ${protocol}://${address}:${port}...`)
}

const server = http.createServer(app.callback())
server.listen(HTTP_PORT, HOST, listeningReporter)
useWebsockets({ server })
