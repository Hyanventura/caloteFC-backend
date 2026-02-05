import express from 'express';
import { playersRouter } from './players/presentation/http/routes';

const router = express.Router();

router.use('/players', playersRouter);

export default router;