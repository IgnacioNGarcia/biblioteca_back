const pool = require('../config/database');

const ejemploModel = {
  // Obtener todos los registros
  getAll: async () => {
    try {
      const result = await pool.query('SELECT * FROM libros');
      return result.rows;
    } catch (error) {
      throw error;
    }
  },

  // Obtener un registro por ID
  getById: async (id) => {
    try {
      const result = await pool.query('SELECT * FROM ejemplos WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Crear un nuevo registro
  create: async (data) => {
    try {
      const { nombre, descripcion } = data;
      const result = await pool.query(
        'INSERT INTO ejemplos (nombre, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre, descripcion]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  // Actualizar un registro
  update: async (id, data) => {
    try {
      const { nombre, descripcion } = data;
      const result = await pool.query(
        'UPDATE ejemplos SET nombre = $1, descripcion = $2 WHERE id = $3 RETURNING *',
        [nombre, descripcion, id]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ejemploModel;