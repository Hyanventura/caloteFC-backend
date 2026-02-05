import { Player } from "../dtos/PlayerDTO";

export interface PlayersRepository {
    getPlayersRepository(): Promise<Player[]>
}

