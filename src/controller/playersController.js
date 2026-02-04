
import db from '../config/db.js';

export const getPlayersController = async (req, res) => {
    try {
        const players = await db.manyOrNone("select * from players order by goals desc");
        res.status(200).json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}