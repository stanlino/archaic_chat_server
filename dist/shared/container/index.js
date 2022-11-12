"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const RoomsRepository_1 = require("../../modules/rooms/repositories-in-memory/RoomsRepository");
const UsersRepository_1 = require("../../modules/users/repositories-in-memory/UsersRepository");
tsyringe_1.container.registerSingleton('RoomsRepository', RoomsRepository_1.RoomsRepository);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.UsersRepository);
