const librosModel = require('../../models/libros/librosModel');

const librosController = {
    getAll: async (req, res) => {
        try {
            const libros = await librosModel.getAll();
            res.json(libros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getById: async (req, res) => {
        try {
            const libro = await librosModel.getById(req.params.id);
            if (!libro) {
                return res.status(404).json({ message: 'Libro no encontrado' });
            }
            res.json(libro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getDisponibles: async (req, res) => {
        try {
            const librosDisponibles = await librosModel.getDisponibles();
            res.json(librosDisponibles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getPrestados: async (req, res) => {
        try {
            const librosPrestados = await librosModel.getPrestados();
            res.json(librosPrestados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getDeteriorados: async (req, res) => {
        try {
            const librosDeteriorados = await librosModel.getDeteriorados();
            res.json(librosDeteriorados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getReservados: async (req, res) => {
        try {
            const librosReservados = await librosModel.getReservados();
            res.json(librosReservados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getInformacionFullJoineada: async (req, res) => {
        try {
            const libros = await librosModel.getInformacionFullJoineada();
            res.json(libros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = librosController;