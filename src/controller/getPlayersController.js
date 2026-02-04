


export const getPlayersController = (req, res) => {
    const players = pgp.many("select * from players order by goals desc");
    res.status(200).json(players);
}