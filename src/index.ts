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
  console.log('a user connected', socket.id);

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

    socket.to(room_id).emit('user-connected', username);
  })

  socket.on('message-to-server', (data) => {
    io.to(data.room_id).emit('message-to-app', data);
  });

  socket.on('disconnect', () => {
    const room_id = leaveRoomController.handle({
      socket_id: socket.id,
    })

    socket.leave(room_id);

    io.to(room_id).emit('user-left', socket.id);

    console.log('user disconnected from room', room_id);
  });

});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on http://localhost:3000');
});
