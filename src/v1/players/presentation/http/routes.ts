import { Router } from "express";
import { GetPlayersController } from "./controller/playersController";

const playersRouter = Router();

playersRouter.get('/', GetPlayersController.make)

export { playersRouter };