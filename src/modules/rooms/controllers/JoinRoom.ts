import { container } from 'tsyringe'
import { JoinRoomUseCase } from '../useCases/JoinRoom';

interface IRequest {
  socket_id: string;
  username: string;
  room_id: string;
}

export class JoinRoomController {
  handle({ room_id, socket_id, username }: IRequest): void {

    const joinRoomUseCase = container.resolve(JoinRoomUseCase);

    joinRoomUseCase.execute({ room_id, socket_id, username });

  }
}