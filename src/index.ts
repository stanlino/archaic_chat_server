import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join-room', (room_id) => {
    socket.join(room_id);
  })

  socket.on('message-to-server', (data) => {
    io.to(data.room_id).emit('message-to-app', data);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on http://localhost:3000');
});
