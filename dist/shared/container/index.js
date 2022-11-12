"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const RoomsRepository_1 = require("../../modules/rooms/infra/socket.io/repositories/RoomsRepository");
const UsersRepository_1 = require("../../modules/users/infra/socket.io/UsersRepository");
tsyringe_1.container.registerSingleton('RoomsRepository', RoomsRepository_1.RoomsRepository);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.UsersRepository);
