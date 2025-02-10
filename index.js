const express = require('express');
const sequelize = require('./src/config/database'); // Conexión a la BD
const countryRoutes = require('./src/modules/location/routes/countries');

const app = express();
app.use(express.json()); // Middleware para JSON

// Puerto del servidor
const PORT = 3000;

// Rutas
app.use('/countries', countryRoutes);

// Sincronizar BD y forzar actualización (usar `{ force: true }` solo en desarrollo)
sequelize.sync()
  .then(() => console.log('✅ Base de datos conectada y sincronizada'))
  .catch(err => console.error('❌ Error al conectar la base de datos:', err));

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
