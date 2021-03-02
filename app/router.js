const express = require('express');
const router = express.Router();
const listController = require('./controllers/listController');

router.get('/lists', listController.getAll);
router.get('/lists/:id', listController.getOneById);

module.exports = router;