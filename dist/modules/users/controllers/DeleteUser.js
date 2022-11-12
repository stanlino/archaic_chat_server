"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteUser_1 = require("../useCases/DeleteUser");
class DeleteUserController {
    handle(socket_id) {
        const deleteUserUseCase = tsyringe_1.container.resolve(DeleteUser_1.DeleteUserUseCase);
        deleteUserUseCase.execute(socket_id);
    }
}
exports.DeleteUserController = DeleteUserController;
