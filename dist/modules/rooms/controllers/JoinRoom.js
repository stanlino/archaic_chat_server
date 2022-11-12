"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomController = void 0;
const tsyringe_1 = require("tsyringe");
const RegisterUser_1 = require("../../users/useCases/RegisterUser");
const JoinRoom_1 = require("../useCases/JoinRoom");
class JoinRoomController {
    handle({ room_id, username }, socket) {
        const socket_id = socket.id;
        const joinRoomUseCase = tsyringe_1.container.resolve(JoinRoom_1.JoinRoomUseCase);
        const registerUserUseCase = tsyringe_1.container.resolve(RegisterUser_1.RegisterUserUseCase);
        joinRoomUseCase.execute({ room_id, socket_id, username });
        registerUserUseCase.execute({ socket_id, username });
        socket.join(room_id);
        socket.to(room_id).emit('user-connected', username);
    }
}
exports.JoinRoomController = JoinRoomController;
