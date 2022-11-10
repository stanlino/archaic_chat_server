import { Router } from "express";

import { roomsRoutes } from './room.routes'

const router = Router()

router.use('/rooms', roomsRoutes);

export { router }