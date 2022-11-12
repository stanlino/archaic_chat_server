import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories-in-memory/IUsersRepository";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  execute(socket_id: string): void {
    this.usersRepository.deleteUserBySocketId(socket_id);
  }
}