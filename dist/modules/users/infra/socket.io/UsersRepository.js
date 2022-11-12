"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const User_1 = require("../../entities/User");
class UsersRepository {
    constructor() {
        this.users = [];
    }
    registerUser(socket_id, username) {
        const user = new User_1.User(socket_id, username);
        this.users.push(user);
    }
    getUserBySocketId(socket_id) {
        return this.users.find((user) => user.socket_id === socket_id);
    }
    deleteUserBySocketId(socket_id) {
        this.users = this.users.filter((user) => user.socket_id !== socket_id);
    }
}
exports.UsersRepository = UsersRepository;
