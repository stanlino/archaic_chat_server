import { container } from "tsyringe";
import { User } from "../entities/User";
import { GetUserUseCase } from "../useCases/GetUser";

export class GetUserController {
  handle(socket_id: string): User | undefined {
    const getUserUseCase = container.resolve(GetUserUseCase);

    const user = getUserUseCase.execute(socket_id);

    return user
  }
}