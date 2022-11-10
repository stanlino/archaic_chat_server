import { injectable, inject } from "tsyringe";
import { IRoomsRepository } from "../repositories/IRoomsRepository";

interface JoinRoomRequest {
  socket_id: string;
  username: string;
  room_id: string;
}

@injectable()
export class JoinRoomUseCase {

  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository
  ) { }

  execute({ socket_id, room_id, username }: JoinRoomRequest): void {
    const room = this.roomsRepository.findRoom(room_id);

    if (!room) {
      this.roomsRepository.createRoom(room_id);
    }

    this.roomsRepository.joinRoom(room_id, username, socket_id);
  }
}