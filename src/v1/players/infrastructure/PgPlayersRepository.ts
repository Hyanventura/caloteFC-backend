import { PlayersRepository } from "../application/repositories/PlayersRepository";
import db from '../../../config/db';
import { Player } from "../application/dtos/PlayerDTO";


export class PgPlayersRepository implements PlayersRepository {
    getPlayersRepository(): Promise<Player[]> {
        return db.manyOrNone("select * from players order by goals desc");
    }
}