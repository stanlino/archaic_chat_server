import { Socket } from 'socket.io';
import { container } from 'tsyringe'
import { RegisterUserUseCase } from '../../users/useCases/RegisterUser';
import { JoinRoomUseCase } from '../useCases/JoinRoom';

interface IRequest {
  username: string;
  room_id: string;
}

export class JoinRoomController {
  handle({ room_id, username }: IRequest, socket: Socket): void {

    const socket_id = socket.id

    const joinRoomUseCase = container.resolve(JoinRoomUseCase);
    const registerUserUseCase = container.resolve(RegisterUserUseCase);

    joinRoomUseCase.execute({ room_id, socket_id, username });
    registerUserUseCase.execute({ socket_id, username });

    socket.join(room_id);

    socket.to(room_id).emit('user-connected', username);
  }
}