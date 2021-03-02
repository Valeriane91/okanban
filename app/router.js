const express = require('express');
const router = express.Router();
const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');

router.get('/lists', listController.getAll);
router.get('/lists/:id', listController.getOneById);
router.post('/lists', listController.create);
router.patch('/lists/:id', listController.update);
router.put('/lists/:id', listController.updatePut);
router.delete('/lists/:id', listController.delete);




router.get('/cards', cardController.cardAll);
router.get('/lists/:id/cards', cardController.getOneCardId);
router.post('/cards', cardController.createCard);
router.patch('/cards/:id', cardController.updateCard);
router.put('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);




module.exports = router;