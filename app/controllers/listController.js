const { List } = require('../models');
const listController = {

    // getAll: async (request, response) => {
    //     // récupérer toutes les listes
    //     List.findAll().then((lists) => {
    //         response.json(lists);
    //     }).catch((error) => {
    //         console.log(error);
    //         response.status(500).send('Une erreur est surevnue');
    
    //     });
    // },

    /**
     * Transmet la liste des listes au format JSON
     *  en réponse à une requete HTTP.
     *  
     * @param {Request} request 
     * @param {Response} response 
     */
    getAll: async (request, response) => {
        
        try {
             // récupérer toutes les listes
            const lists = await List.findAll();

            // Les renvoyer au format JSON
            response.json(lists);

        } catch (error) {
            console.log(error);
            response.status(500).send('Une erreur est surevnue');
        }

    },

    /**
     * Transmet UNE liste en réponse à une requete HTTP.
     * 
     * @param { Request } request 
     * @param { Response } response 
     */
    getOneById: async (request, response) => {

        try {
            // récupérer la liste demandée
            const list = await List.findByPk(request.params.id);

            if (list === null) {
                response.status(404).send(`La ressource demandée n'existe pas`);
            } else {
                // la transmettre
                response.json(list);
            }

        } catch (error) {
            console.log(error);
            response.status(500).send('Une erreur est surevnue');
        }
    }


}

module.exports = listController;