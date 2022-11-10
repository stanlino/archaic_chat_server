"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsRoutes = void 0;
const express_1 = require("express");
const ListRooms_1 = require("../modules/rooms/controllers/ListRooms");
const roomsRoutes = (0, express_1.Router)();
exports.roomsRoutes = roomsRoutes;
const listRoomsController = new ListRooms_1.ListRoomsCrontroller();
roomsRoutes.get('/', listRoomsController.handle);
