// Importar Express
const express = require('express');
const app = express();

// Puerto del servidor
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
