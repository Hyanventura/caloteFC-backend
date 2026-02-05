import { PlayersRepository } from "../repositories/PlayersRepository";



export class DeletePlayerUsecase {
    constructor(private playersRepository: PlayersRepository) {}
    
    async exec(id: string): Promise<void> {
        await this.playersRepository.deletePlayer(id);
    }
}