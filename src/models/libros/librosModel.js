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
  },
  getInformacionFullJoineada: async () => {
    try {
      const result = await pool.query(
        `select l.id, l.isbn, l.titulo, l.edicion, l.año, g.nombre as "genero", e.nombre as "autor", p.nombre as "país", l.estado
         from libros l 
          left join generos g on g.id = l.genero_id 
          left join editoriales e on e.id = l.editorial_id
          left join paises p on p.id = l.pais_id
          order by l.id asc`);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = librosModel;
