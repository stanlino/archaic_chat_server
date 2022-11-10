"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomController = void 0;
const tsyringe_1 = require("tsyringe");
const JoinRoom_1 = require("../useCases/JoinRoom");
class JoinRoomController {
    handle({ room_id, socket_id, username }) {
        const joinRoomUseCase = tsyringe_1.container.resolve(JoinRoom_1.JoinRoomUseCase);
        joinRoomUseCase.execute({ room_id, socket_id, username });
    }
}
exports.JoinRoomController = JoinRoomController;
