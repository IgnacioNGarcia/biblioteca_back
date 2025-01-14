const express = require('express');
const router = express.Router();
const librosController = require('../../controllers/libros/librosController');

router.get('/disponibles', librosController.getDisponibles);
router.get('/librosFull', librosController.getInformacionFullJoineada);
router.get('/:id', librosController.getById);
router.get('/', librosController.getAll);

module.exports = router;
