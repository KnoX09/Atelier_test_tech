var data = require('../data/data.json')

module.exports = {
    getPlayers: (req, res) => {

        data.players.sort((a, b) => {
            return a.data.rank - b.data.rank
        })

        return res.status(200).json(data.players)

    },
    getPlayer: (req, res) => {
        let player = data.players.find(elem => elem.id == req.params.id)
        if (player)
            return res.status(200).json(player)
        else
            return res.status(404).json({status: 404, message: 'Player not found with this ID'})
    }
}
