import { injectable, inject } from "tsyringe";

import { IRoomsRepository } from "../repositories/IRoomsRepository";

interface LeaveRoomRequest {
  socket_id: string;
  room_id: string;
}

@injectable()
export class LeaveRoomUseCase {

  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository
  ) { }

  execute({ socket_id, room_id }: LeaveRoomRequest): void {
    const room = this.roomsRepository.findRoom(room_id);

    if (room) {
      this.roomsRepository.leaveRoom(room_id, socket_id);
    }
  }
}