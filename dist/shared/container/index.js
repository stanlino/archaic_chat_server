"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const RoomsRepository_1 = require("../../modules/rooms/infra/socket.io/repositories/RoomsRepository");
tsyringe_1.container.registerSingleton('RoomsRepository', RoomsRepository_1.RoomsRepository);
