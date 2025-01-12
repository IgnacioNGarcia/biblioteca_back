const express = require('express');
const router = express.Router();
const ejemploController = require('../controllers/ejemploController');

router.get('/', ejemploController.getAll);
router.get('/:id', ejemploController.getById);

module.exports = router;