import { Room } from "../entities/Room";

export interface IRoomsRepository {
  createRoom(room_id: string): void;
  joinRoom(room_id: string, username: string, socket_id: string): void;
  leaveRoom(room_id: string, socket_id: string): void;
  findRoom(room_id: string): Room | undefined;
  allRooms(): Room[];
}