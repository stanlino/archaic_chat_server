import { Request, Response } from "express";
import { container } from 'tsyringe'

import { ListRoomsUseCase } from "../useCases/ListRooms";

export class ListRoomsCrontroller {
  handle(request: Request, response: Response): Response {

    const listRoomsUseCase = container.resolve(ListRoomsUseCase);

    const rooms = listRoomsUseCase.execute();

    return response.json(rooms);
  }
}