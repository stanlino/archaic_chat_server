import { container } from 'tsyringe'

import { RoomsRepository } from '../../modules/rooms/repositories-in-memory/RoomsRepository'
import { IRoomsRepository } from '../../modules/rooms/repositories-in-memory/IRoomsRepository'
import { UsersRepository } from '../../modules/users/repositories-in-memory/UsersRepository'
import { IUsersRepository } from '../../modules/users/repositories-in-memory/IUsersRepository'

container.registerSingleton<IRoomsRepository>('RoomsRepository', RoomsRepository)
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)