"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRoomsCrontroller = void 0;
const tsyringe_1 = require("tsyringe");
const ListRooms_1 = require("../useCases/ListRooms");
class ListRoomsCrontroller {
    handle(request, response) {
        const listRoomsUseCase = tsyringe_1.container.resolve(ListRooms_1.ListRoomsUseCase);
        const rooms = listRoomsUseCase.execute();
        return response.json(rooms);
    }
}
exports.ListRoomsCrontroller = ListRoomsCrontroller;
