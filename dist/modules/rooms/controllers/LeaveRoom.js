"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRoomController = void 0;
const tsyringe_1 = require("tsyringe");
const LeaveRoom_1 = require("../useCases/LeaveRoom");
class LeaveRoomController {
    handle({ socket_id }) {
        const leaveRoomUseCase = tsyringe_1.container.resolve(LeaveRoom_1.LeaveRoomUseCase);
        const room_id = leaveRoomUseCase.execute({ socket_id });
        if (room_id) {
            return room_id;
        }
        return '';
    }
}
exports.LeaveRoomController = LeaveRoomController;
