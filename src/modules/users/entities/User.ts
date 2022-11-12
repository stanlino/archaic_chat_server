export class User {
  socket_id: string;
  username: string;

  constructor(socket_id: string, username: string) {
    this.socket_id = socket_id;
    this.username = username;
  }
}