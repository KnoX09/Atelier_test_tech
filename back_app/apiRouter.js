// Import
const express = require('express');
const playerCtrl = require('./routes/players');
const statsCtrl = require('./routes/stats');

// Router
exports.router = (function () {
    var apiRouter = express.Router();

    apiRouter.route('/players').get(playerCtrl.getPlayers);
    apiRouter.route('/players/:id').get(playerCtrl.getPlayer);

    apiRouter.route('/stats').get(statsCtrl.getStats);

    return apiRouter;
})();