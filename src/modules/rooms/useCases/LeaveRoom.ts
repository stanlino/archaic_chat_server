import { injectable, inject } from "tsyringe";

import { IRoomsRepository } from "../repositories/IRoomsRepository";

interface LeaveRoomRequest {
  socket_id: string;
}

@injectable()
export class LeaveRoomUseCase {

  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository
  ) { }

  execute({ socket_id }: LeaveRoomRequest): string | void {

    const room = this.roomsRepository.getRoomBySocketId(socket_id);

    if (room) {
      this.roomsRepository.leaveRoom(room.id, socket_id);

      return room.id;
    }
  }
}