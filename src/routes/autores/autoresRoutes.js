const express = require('express');
const router = express.Router();
const autoresController = require('../../controllers/autores/autoresController');

router.get('/', autoresController.getAll);
router.get('/:id', autoresController.getById);
router.post('/', autoresController.create);
router.put('/:id', autoresController.update);

module.exports = router;
