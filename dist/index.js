"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
require("./shared/container");
const routes_1 = require("./routes");
const JoinRoom_1 = require("./modules/rooms/controllers/JoinRoom");
const LeaveRoom_1 = require("./modules/rooms/controllers/LeaveRoom");
const CreateUser_1 = require("./modules/users/controllers/CreateUser");
const GetUser_1 = require("./modules/users/controllers/GetUser");
const DeleteUser_1 = require("./modules/users/controllers/DeleteUser");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
const joinRoomController = new JoinRoom_1.JoinRoomController();
const leaveRoomController = new LeaveRoom_1.LeaveRoomController();
const createUserController = new CreateUser_1.CreateUserController();
const getUserController = new GetUser_1.GetUserController();
const deleteUserController = new DeleteUser_1.DeleteUserController();
app.use(routes_1.router);
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
        });
        createUserController.handle(socket.id, username);
        socket.to(room_id).emit('user-connected', username);
    });
    socket.on('message-to-server', (data) => {
        io.to(data.room_id).emit('message-to-app', data);
    });
    socket.on('disconnect', () => {
        const room_id = leaveRoomController.handle({
            socket_id: socket.id,
        });
        socket.leave(room_id);
        const user = getUserController.handle(socket.id);
        io.to(room_id).emit('user-left', user === null || user === void 0 ? void 0 : user.username);
        deleteUserController.handle(socket.id);
        console.log('user disconnected from room', room_id);
    });
});
server.listen(process.env.PORT || 3000, () => {
    console.log('listening on http://localhost:3000');
});
