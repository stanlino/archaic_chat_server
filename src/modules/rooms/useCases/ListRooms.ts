import { injectable, inject } from 'tsyringe';
import { Room } from '../entities/Room';
import { IRoomsRepository } from '../repositories-in-memory/IRoomsRepository';

@injectable()
export class ListRoomsUseCase {

  constructor(
    @inject('RoomsRepository')
    private roomsRepository: IRoomsRepository
  ) { }

  execute(): Room[] {
    return this.roomsRepository.allRooms();
  }
}