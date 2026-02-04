import { getPlayersController } from "../controller/playersController.js";
import express from 'express';

const router = express.Router();

router.get('/players', getPlayersController);



export default router;