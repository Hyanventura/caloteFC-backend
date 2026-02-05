import { PlayersRepository } from "../application/repositories/PlayersRepository";
import db from '../../../config/db';
import { Player } from "../application/dtos/PlayerDTO";


export class PgPlayersRepository implements PlayersRepository {
    getPlayers(): Promise<Player[]> {
        return db.manyOrNone("select * from players order by goals desc");
    }

    deletePlayer(id: string): Promise<null> {
        return db.none("delete from players where id = $1", [id]);
    }
}