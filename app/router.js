const express = require('express');


//TODO : controllers à importer

const cardController = require('./controllers/cardController');
const listController = require('./controllers/listController.js');

const router = express.Router();

//TODO : routes à définir

router.get('/lists', listController.getList);

router.get('/lists/:id', listController.getListId);

router.post('/lists', listController.doList);

router.patch('/lists/:id', listController.patchList);

router.delete('/lists/:id', listController.removeList);

//affichage des cartes
router.get('/cards', cardController.getCard);

router.get('/lists/:id/cards', cardController.getCardList);

router.get('/cards/:id', cardController.getCardId);

router.post('/cards', cardController.doCard);

router.patch('/cards/:id', cardController.patchCard);

router.delete('/cards/:id', cardController.removeCard);


//on exporte le router pour y avoir accès dans index.js
module.exports = router;