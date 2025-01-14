const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ejemploRoutes = require('./routes/ejemploRoutes');
const librosRoutes = require('./routes/libros/librosRoutes');
const pool = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/libros', librosRoutes);


// Prueba de conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 