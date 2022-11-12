import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  registerUser(socket_id: string, username: string): void {

    const user = new User(socket_id, username);

    this.users.push(user);
  }

  getUserBySocketId(socket_id: string): User | undefined {
    return this.users.find((user) => user.socket_id === socket_id);
  }

  deleteUserBySocketId(socket_id: string): void {
    this.users = this.users.filter((user) => user.socket_id !== socket_id);
  }
}