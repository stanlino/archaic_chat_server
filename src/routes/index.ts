import { Router } from "express";

import { roomsRoutes } from './rooms.routes'

const router = Router()

router.use('/rooms', roomsRoutes);

export { router }