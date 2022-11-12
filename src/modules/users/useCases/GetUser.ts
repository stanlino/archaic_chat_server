import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  execute(socket_id: string): User | undefined {
    const user = this.usersRepository.getUserBySocketId(socket_id);

    return user;
  }
}