var data = require('../data/data.json')

module.exports = {
    getStats: (req, res) => {
        let stats = {
            ratioCountry: [],
            IMC: {
                averageIMC: null,
                players: []
            },
            height: {
                heights:[],
                median: null
            }
        }

        // Calcul Ratio Country
        data.players.map(p => {
            let win = p.data.last.reduce((prev, curr) => prev + curr , 0)
            let game = p.data.last.length
            currentCountry = stats.ratioCountry.find(elem => elem?.country == p.country.code)
            if (!currentCountry) {
                let item = {
                    country: p.country.code,
                    win: win,
                    game: game,
                }
                stats.ratioCountry.push(item)
            } else {
                currentCountry.win += win
                currentCountry.game += game
            }
        })

        stats.ratioCountry.map(c => {
            c.ratio = c.win / c.game * 100
        })

        stats.ratioCountry.sort((a, b) => {
            return b.ratio - a.ratio
        })

        // Calcul IMC
        data.players.map(p => {
            let IMC = (p.data.weight / Math.pow(p.data.height,2)) * 10
            let item = {
                id: p.id,
                firstname: p.firstname,
                lastname: p.lastname,
                IMC: IMC,
            }
            stats.IMC.players.push(item)
        })

        stats.IMC.players.map(i => {
            stats.IMC.averageIMC += i.IMC
        })

        stats.IMC.averageIMC /= stats.IMC.players.length
        stats.IMC.averageIMC = Math.round(stats.IMC.averageIMC * 100) / 100


        // Calcul Median
        data.players.map(p => stats.height.heights.push(p.data.height))
        stats.height.heights.sort()
        let isImpair = stats.height.heights.length % 2
        let lengthMid = stats.height.heights.length / 2
        if (isImpair) {
            stats.height.median = stats.height.heights[Math.ceil(lengthMid) - 1]
        } else {
            stats.height.median = (stats.height.heights[lengthMid - 1] + stats.height.heights[lengthMid]) / 2
        }

        console.log(stats);
        return res.status(200).json(stats)
    }
}
