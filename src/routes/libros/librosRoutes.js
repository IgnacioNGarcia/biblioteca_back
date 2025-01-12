const express = require('express');
const router = express.Router();
const librosController = require('../../controllers/libros/librosController');

router.get('/', librosController.getAll);
router.get('/disponibles', librosController.getDisponibles);
router.get('/:id', librosController.getById);

module.exports = router;