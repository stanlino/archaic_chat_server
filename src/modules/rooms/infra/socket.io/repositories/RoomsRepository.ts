import { Room } from "../../../entities/Room";
import { IRoomsRepository } from "../../../repositories/IRoomsRepository";

export class RoomsRepository implements IRoomsRepository {
  private rooms: Room[] = [];

  createRoom(room_id: string): void {
    const room = new Room(room_id);

    this.rooms.push(room);
  }

  joinRoom(room_id: string, username: string, socket_id: string): void {
    const room = this.rooms.find(room => room.id === room_id);

    if (!room) {
      throw new Error("Room does not exists");
    }

    room.users.push({
      socket_id,
      username
    });
  }

  leaveRoom(room_id: string, socket_id: string): void {
    const room = this.rooms.find(room => room.id === room_id);

    if (!room) {
      throw new Error("Room does not exists");
    }

    room.users = room.users.filter(user => user.socket_id !== socket_id);

    if (room.users.length === 0) {
      this.rooms = this.rooms.filter(room => room.id !== room_id);
    }
  }

  findRoom(room_id: string): Room | undefined {
    return this.rooms.find(room => room.id === room_id);
  }

  allRooms(): Room[] {
    return this.rooms;
  }
}