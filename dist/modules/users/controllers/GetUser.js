"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const tsyringe_1 = require("tsyringe");
const GetUser_1 = require("../useCases/GetUser");
class GetUserController {
    handle(socket_id) {
        const getUserUseCase = tsyringe_1.container.resolve(GetUser_1.GetUserUseCase);
        const user = getUserUseCase.execute(socket_id);
        return user;
    }
}
exports.GetUserController = GetUserController;
