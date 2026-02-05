
import { Request, Response } from 'express';
import { PgPlayersRepository } from '../../../infrastructure/PgPlayersRepository';
import { DeletePlayerUsecase } from '../../../application/usecases/DeletePlayerUsecase';

export class DeletePlayerController {
    constructor(
        private readonly deletePlayerUseCase: DeletePlayerUsecase
    ) {}

    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'Player ID is required' });
            }

            console.log('Deleting player with ID:', id);
            await this.deletePlayerUseCase.exec(id as string);
            return res.status(204).send({message: 'JOIA deletada com sucesso'});
        } catch (error) {
            return res.status(500).json({ error: `Internal Server Error ${error}` });
        }
    }

    static make(req: Request, res: Response) {
        const playersRepository = new PgPlayersRepository();
        const deletePlayerUsecase = new DeletePlayerUsecase(playersRepository);
        const controller = new DeletePlayerController(deletePlayerUsecase);
        return controller.handle(req, res);
    }
}


