const ejemploModel = require('../models/ejemploModel');

const ejemploController = {
  getAll: async (req, res) => {
    try {
      const ejemplos = await ejemploModel.getAll();
      res.json(ejemplos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const ejemplo = await ejemploModel.getById(req.params.id);
      if (!ejemplo) {
        return res.status(404).json({ message: 'No encontrado' });
      }
      res.json(ejemplo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoEjemplo = await ejemploModel.create(req.body);
      res.status(201).json(nuevoEjemplo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const ejemploActualizado = await ejemploModel.update(req.params.id, req.body);
      if (!ejemploActualizado) {
        return res.status(404).json({ message: 'No encontrado' });
      }
      res.json(ejemploActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ejemploController;