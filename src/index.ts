import "reflect-metadata"

import express from 'express';
import http from 'http';
import { Server } from "socket.io";

import './shared/container';
import { router } from './routes';
import { JoinRoomController } from './modules/rooms/controllers/JoinRoom';
import { LeaveRoomController } from "./modules/rooms/controllers/LeaveRoom";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const joinRoomController = new JoinRoomController()
const leaveRoomController = new LeaveRoomController()

app.use(router)

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join-room', ({ room_id, username }) => {
    if (!room_id || !username) {
      return;
    }

    socket.join(room_id);
    joinRoomController.handle({
      socket_id: socket.id,
      room_id,
      username,
    })
  })

  socket.on('message-to-server', (data) => {
    io.to(data.room_id).emit('message-to-app', data);
  });

  socket.on('leave-room', ({ room_id, username }) => {
    socket.leave(room_id);
    leaveRoomController.handle({
      socket_id: socket.id,
      room_id,
    })

    io.to(room_id).emit('user-left', username);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on http://localhost:3000');
});
