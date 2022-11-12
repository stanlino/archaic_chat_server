import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories-in-memory/IUsersRepository";

interface IRequest {
  socket_id: string
  username: string
}

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  execute({ socket_id, username }: IRequest): void {
    this.usersRepository.registerUser(socket_id, username);
  }
}