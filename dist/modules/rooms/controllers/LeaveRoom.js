"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRoomController = void 0;
const tsyringe_1 = require("tsyringe");
const GetUser_1 = require("../../users/useCases/GetUser");
const LeaveRoom_1 = require("../useCases/LeaveRoom");
const DeleteUser_1 = require("../../users/useCases/DeleteUser");
class LeaveRoomController {
    handle({ socket_id }, socket) {
        const leaveRoomUseCase = tsyringe_1.container.resolve(LeaveRoom_1.LeaveRoomUseCase);
        const getUserUseCase = tsyringe_1.container.resolve(GetUser_1.GetUserUseCase);
        const deleteUserUseCase = tsyringe_1.container.resolve(DeleteUser_1.DeleteUserUseCase);
        const room_id = leaveRoomUseCase.execute({ socket_id });
        const user = getUserUseCase.execute(socket_id);
        deleteUserUseCase.execute(socket_id);
        socket.leave(room_id);
        socket.to(room_id).emit('user-left', user === null || user === void 0 ? void 0 : user.username);
    }
}
exports.LeaveRoomController = LeaveRoomController;
