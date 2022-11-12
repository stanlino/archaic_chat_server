import { Socket } from 'socket.io'
import { container } from 'tsyringe'

import { GetUserUseCase } from '../../users/useCases/GetUser'
import { LeaveRoomUseCase } from '../useCases/LeaveRoom'
import { DeleteUserUseCase } from '../../users/useCases/DeleteUser'

interface IRequest {
  socket_id: string
}

export class LeaveRoomController {
  handle({ socket_id }: IRequest, socket: Socket): void {

    const leaveRoomUseCase = container.resolve(LeaveRoomUseCase)
    const getUserUseCase = container.resolve(GetUserUseCase)
    const deleteUserUseCase = container.resolve(DeleteUserUseCase)

    const room_id = leaveRoomUseCase.execute({ socket_id })
    const user = getUserUseCase.execute(socket_id)
    deleteUserUseCase.execute(socket_id)

    socket.leave(room_id!)

    socket.to(room_id!).emit('user-left', user?.username)
  }
}