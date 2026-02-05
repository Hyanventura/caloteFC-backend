import { Player } from "../dtos/PlayerDTO";
import { PlayersRepository } from "../repositories/PlayersRepository";


export class GetPlayersUsecase {
    constructor(private playersRepository: PlayersRepository) {}

    async exec(): Promise<Player[]> {
        const players = await this.playersRepository.getPlayersRepository();
        return players;
    }
}