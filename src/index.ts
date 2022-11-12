import "reflect-metadata"

import express from 'express';
import http from 'http';
import { Server } from "socket.io";

import './shared/container';
import { router } from './routes';
import { JoinRoomController } from './modules/rooms/controllers/JoinRoom';
import { LeaveRoomController } from "./modules/rooms/controllers/LeaveRoom";
import { CreateUserController } from "./modules/users/controllers/CreateUser";
import { GetUserController } from "./modules/users/controllers/GetUser";
import { DeleteUserController } from "./modules/users/controllers/DeleteUser";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const joinRoomController = new JoinRoomController()
const leaveRoomController = new LeaveRoomController()
const createUserController = new CreateUserController()
const getUserController = new GetUserController()
const deleteUserController = new DeleteUserController()

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

    createUserController.handle(socket.id, username)

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

    const user = getUserController.handle(socket.id)

    io.to(room_id).emit('user-left', user?.username);

    deleteUserController.handle(socket.id)

    console.log('user disconnected from room', room_id);
  });

});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on http://localhost:3000');
});
