const {List} = require('../models');

module.exports = {

    getList: (request, response) => {
        response.render('list');
    },

    getListId: (request, response) => {

        const id = parseInt(request.params.id);

        Quiz.findByPk(id, {
            include: ['cards']
        }).then(list => {
            response.render('list', {list});
        }).catch(error => {
            response.status(500).send( error);
        });

        
    },


    doList: (request, response) => {

        const id = parseInt(request.params.id);

        Quiz.findByPk(id, {
            include: ['cards']
        }).then(list => {
            response.render('list', {list});
        }).catch(error => {
            response.status(500).send( error);
        });

        
    }



};