import { Router } from "express";
import { ListRoomsCrontroller } from "../modules/rooms/controllers/ListRooms";

const roomsRoutes = Router();

const listRoomsController = new ListRoomsCrontroller();

roomsRoutes.get('/', listRoomsController.handle);

export { roomsRoutes }