const autoresModel = require('../../models/autores/autoresModel');

const autoresController = {
  getAll: async (req, res) => {
    try {
      const autores = await autoresModel.getAll();
      res.json(autores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const autores = await autoresModel.getById(req.params.id);
      if (!autores) {
        return res.status(404).json({ message: 'No encontrado' });
      }
      res.json(autores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoAutor = await autoresModel.create(req.body);
      res.status(201).json(nuevoAutor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const autorActualizado = await autoresModel.update(req.params.id, req.body);
      if (!autorActualizado) {
        return res.status(404).json({ message: 'No encontrado' });
      }
      res.json(autorActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = autoresController;