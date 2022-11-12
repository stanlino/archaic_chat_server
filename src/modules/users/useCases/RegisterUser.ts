import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  execute(socket_id: string, username: string): void {
    this.usersRepository.registerUser(socket_id, username);
  }
}