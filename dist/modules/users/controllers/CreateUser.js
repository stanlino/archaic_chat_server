"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const RegisterUser_1 = require("../useCases/RegisterUser");
class CreateUserController {
    handle(socket_id, username) {
        const createUserUseCase = tsyringe_1.container.resolve(RegisterUser_1.RegisterUserUseCase);
        createUserUseCase.execute(socket_id, username);
    }
}
exports.CreateUserController = CreateUserController;
