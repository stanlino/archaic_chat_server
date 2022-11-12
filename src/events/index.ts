import { Socket } from "socket.io"

import { JoinRoomController } from "../modules/rooms/controllers/JoinRoom";
import { LeaveRoomController } from "../modules/rooms/controllers/LeaveRoom";

const joinRoomController = new JoinRoomController();
const leaveRoomController = new LeaveRoomController();

const eventsController = (socket: Socket) => {

  const socket_id = socket.id;

  socket.on('join-room', (payload) => {
    joinRoomController.handle(payload, socket);
  })

  socket.on('message-to-server', (data) => {
    socket.to(data.room_id).emit('message-to-app', data);
  });

  socket.on('disconnect', () => {
    leaveRoomController.handle({ socket_id }, socket)
  });

}

export { eventsController }