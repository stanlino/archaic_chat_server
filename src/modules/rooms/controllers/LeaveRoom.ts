import { container } from 'tsyringe'
import { LeaveRoomUseCase } from '../useCases/LeaveRoom';

interface IRequest {
  socket_id: string;
}

export class LeaveRoomController {
  handle({ socket_id }: IRequest): string {

    const leaveRoomUseCase = container.resolve(LeaveRoomUseCase);

    const room_id = leaveRoomUseCase.execute({ socket_id });

    if (room_id) {
      return room_id;
    }

    return '';
  }
}