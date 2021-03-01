const {Card} = require('../models');

module.exports = {
    getCard: (request, response) => {
        response.render('cards');
    },

}