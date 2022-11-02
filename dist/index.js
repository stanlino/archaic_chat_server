"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('join-room', (room_id) => {
        socket.join(room_id);
    });
    socket.on('message-to-server', (data) => {
        io.to(data.room_id).emit('message-to-app', data);
    });
});
server.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
