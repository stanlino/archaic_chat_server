import { container } from 'tsyringe'

import { RoomsRepository } from '../../modules/rooms/infra/socket.io/repositories/RoomsRepository'
import { IRoomsRepository } from '../../modules/rooms/repositories/IRoomsRepository'
import { UsersRepository } from '../../modules/users/infra/socket.io/UsersRepository'
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository'

container.registerSingleton<IRoomsRepository>('RoomsRepository', RoomsRepository)
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)