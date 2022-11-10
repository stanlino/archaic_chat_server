import { User } from './User'

export class Room {
  id: string;
  users: User[];

  constructor(id: string) {
    this.id = id;
    this.users = [];
  }
}