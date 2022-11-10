import { container } from 'tsyringe'

import { RoomsRepository } from '../../modules/rooms/infra/socket.io/repositories/RoomsRepository'
import { IRoomsRepository } from '../../modules/rooms/repositories/IRoomsRepository'

container.registerSingleton<IRoomsRepository>('RoomsRepository', RoomsRepository)