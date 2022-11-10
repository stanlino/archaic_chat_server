import { container } from 'tsyringe'
import { LeaveRoomUseCase } from '../useCases/LeaveRoom';

interface IRequest {
  socket_id: string;
  room_id: string;
}

export class LeaveRoomController {
  handle({ room_id, socket_id }: IRequest): void {

    const leaveRoomUseCase = container.resolve(LeaveRoomUseCase);

    leaveRoomUseCase.execute({ room_id, socket_id });

  }
}