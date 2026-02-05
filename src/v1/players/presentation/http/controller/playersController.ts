
import { Request, Response } from 'express';
import { GetPlayersUsecase } from '../../../application/usecases/GetPlayersUsecase';
import { PgPlayersRepository } from '../../../infrastructure/PgPlayersRepository';

export class GetPlayersController {
    constructor(
        private readonly getPlayersUseCase: GetPlayersUsecase
    ) {}

    async handle(req: Request, res: Response) {
        try {
            const players = await this.getPlayersUseCase.exec();
            return res.json(players);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static make(req: Request, res: Response) {
        const playersRepository = new PgPlayersRepository();
        const getPlayersUsecase = new GetPlayersUsecase(playersRepository);
        const controller = new GetPlayersController(getPlayersUsecase);
        return controller.handle(req, res);
    }
}




