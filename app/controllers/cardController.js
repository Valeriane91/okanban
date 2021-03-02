const { request, response } = require('express');
const { Card } = require('../models');
const cardController = {

     *  
     * @param {Request} request 
     * @param {Response} response 
     */
    cardAll: async (request, response) => {
        
        try {
             // récupérer toutes les listes
            const cards = await Card.findAll();

            // Les renvoyer au format JSON
            response.json(cards);

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
    getOneCardId: async (request, response) => {

        try {
            // récupérer la liste demandée
            const cards = await Card.findByPk(request.params.id);

            if (cards === null) {
                response.status(404).send(`La ressource demandée n'existe pas`);
            } else {

                // la transmettre
                response.json(cards);
            }

        } catch (error) {
            console.log(error);
            response.status(500).send('Une erreur est surevnue');
        }
    },

    /**
     * Modification complete d'une liste.
     * 
     * @param { Request } request 
     * @param { Response } response 
     */

    deleteCard: async (request, response) => {
         // récuperer la liste à modifier
         try {
            // récupérer la liste demandée
            const cards = await List.findByPk(request.params.id);

            if (cards === null) {
                response.status(404).send(`La ressource demandée n'existe pas`);
            } else {

                // supprimer la liste demandée
                await cards.destroy();

                // Répondre au client.
                // la transmettre
                response.send("La suppression s'est bien passée");
            }

        } catch (error) {
            console.log(error);
            response.status(500).send('Une erreur est surevnue');
        }
        
    }

}

module.exports = cardController;