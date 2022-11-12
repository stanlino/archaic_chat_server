import { User } from "../entities/User";

export interface IUsersRepository {
  registerUser(socket_id: string, username: string): void;
  getUserBySocketId(socket_id: string): User | undefined;
  deleteUserBySocketId(socket_id: string): void;
}