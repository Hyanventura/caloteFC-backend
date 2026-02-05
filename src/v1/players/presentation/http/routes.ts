import { Router } from "express";
import { GetPlayersController } from "./controller/GetPlayersController";
import { DeletePlayerController } from "./controller/DeletePlayerController";

const playersRouter = Router();

playersRouter.get('/', GetPlayersController.make)
playersRouter.delete('/:id', DeletePlayerController.make);
export { playersRouter };