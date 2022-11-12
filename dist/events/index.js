"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsController = void 0;
const JoinRoom_1 = require("../modules/rooms/controllers/JoinRoom");
const LeaveRoom_1 = require("../modules/rooms/controllers/LeaveRoom");
const joinRoomController = new JoinRoom_1.JoinRoomController();
const leaveRoomController = new LeaveRoom_1.LeaveRoomController();
const eventsController = (socket) => {
    const socket_id = socket.id;
    socket.on('join-room', (payload) => {
        joinRoomController.handle(payload, socket);
    });
    socket.on('message-to-server', (data) => {
        socket.to(data.room_id).emit('message-to-app', data);
    });
    socket.on('disconnect', () => {
        leaveRoomController.handle({ socket_id }, socket);
    });
};
exports.eventsController = eventsController;
