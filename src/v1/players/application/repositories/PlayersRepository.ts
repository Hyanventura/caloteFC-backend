import { Player } from "../dtos/PlayerDTO";

export interface PlayersRepository {
    getPlayers(): Promise<Player[]>
    deletePlayer(id: string): Promise<null>
}

