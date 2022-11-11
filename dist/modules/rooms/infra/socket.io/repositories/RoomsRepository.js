"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsRepository = void 0;
const Room_1 = require("../../../entities/Room");
class RoomsRepository {
    constructor() {
        this.rooms = [];
    }
    createRoom(room_id) {
        const room = new Room_1.Room(room_id);
        this.rooms.push(room);
    }
    joinRoom(room_id, username, socket_id) {
        const room = this.rooms.find(room => room.id === room_id);
        if (!room) {
            throw new Error("Room does not exists");
        }
        room.users.push({
            socket_id,
            username
        });
    }
    leaveRoom(room_id, socket_id) {
        const room = this.rooms.find(room => room.id === room_id);
        if (!room) {
            throw new Error("Room does not exists");
        }
        room.users = room.users.filter(user => user.socket_id !== socket_id);
        if (room.users.length === 0) {
            this.rooms = this.rooms.filter(room => room.id !== room_id);
        }
    }
    findRoom(room_id) {
        return this.rooms.find(room => room.id === room_id);
    }
    allRooms() {
        return this.rooms;
    }
    getRoomBySocketId(socket_id) {
        return this.rooms.find(room => room.users.find(user => user.socket_id === socket_id));
    }
}
exports.RoomsRepository = RoomsRepository;
