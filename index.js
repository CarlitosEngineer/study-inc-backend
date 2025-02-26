const express = require('express');
const sequelize = require('./src/config/database'); // Conexión a la BD
const countryRoutes = require('./src/modules/location/routes/countries');
const GenderRoutes = require('./src/modules/global/genders/routes/genders')
const LangRoutes = require('./src/modules/global/languages/routes/languages')

const app = express();
app.use(express.json()); // Middleware para JSON

// Puerto del servidor
const PORT = 3000;

// Rutas
app.use('/countries', countryRoutes);
app.use('/genders', GenderRoutes);
app.use('/langs', LangRoutes);



// Sincronizar BD y forzar actualización (usar `{ force: true }` solo en desarrollo)
sequelize.sync()
  .then(() => console.log('✅ Base de datos conectada y sincronizada'))
  .catch(err => console.error('❌ Error al conectar la base de datos:', err));

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

<<<<<<< HEAD
=======
// Importar rutas de la API


//app.use(bodyParser.json())
//app.use('/api/users/', " ./routes/users.routes")

>>>>>>> a555745 (global folder  con modelos genders y languages)
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
