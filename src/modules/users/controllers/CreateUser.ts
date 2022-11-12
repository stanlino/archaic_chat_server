import { container } from "tsyringe";
import { RegisterUserUseCase } from "../useCases/RegisterUser";

export class CreateUserController {
  handle(socket_id: string, username: string): void {
    const createUserUseCase = container.resolve(RegisterUserUseCase);

    createUserUseCase.execute({ socket_id, username });
  }
}