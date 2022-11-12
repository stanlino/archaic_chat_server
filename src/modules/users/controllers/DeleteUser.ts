import { container } from "tsyringe";
import { DeleteUserUseCase } from "../useCases/DeleteUser";

export class DeleteUserController {
  handle(socket_id: string): void {
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    deleteUserUseCase.execute(socket_id);
  }
}