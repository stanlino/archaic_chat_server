import "reflect-metadata"

import express from 'express'
import http from 'http'
import { Server, Socket } from "socket.io"

import './shared/container'
import { router } from './routes'
import { eventsController } from "./events"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(router)

const onConnection = (socket: Socket) => {
  console.log('New socket => ', socket.id)

  eventsController(socket)
}

io.on('connection', onConnection)

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on http://localhost:3000')
})
