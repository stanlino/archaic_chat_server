"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRoomController = void 0;
const tsyringe_1 = require("tsyringe");
const LeaveRoom_1 = require("../useCases/LeaveRoom");
class LeaveRoomController {
    handle({ room_id, socket_id }) {
        const leaveRoomUseCase = tsyringe_1.container.resolve(LeaveRoom_1.LeaveRoomUseCase);
        leaveRoomUseCase.execute({ room_id, socket_id });
    }
}
exports.LeaveRoomController = LeaveRoomController;
