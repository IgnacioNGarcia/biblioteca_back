const pool = require('../../config/database');

const librosModel = {
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
      const result = await pool.query('SELECT * FROM libros WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
  getDisponibles: async () => {
    try {
      const result = await pool.query('SELECT * FROM libros WHERE estado = $1 order by id asc', ['DISPONIBLE'] );
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = librosModel;
