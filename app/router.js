const express = require('express');
const router = express.Router();
const listController = require('./controllers/listController');

router.get('/lists', listController.getAll);
router.get('/lists/:id', listController.getOneById);
router.post('/lists', listController.create);
router.patch('/lists/:id', listController.update);
router.put('/lists/:id', listController.updatePut);
router.delete('/lists/:id', listController.delete);

module.exports = router;