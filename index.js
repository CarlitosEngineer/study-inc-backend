const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB(); // Conexión a MongoDB

app.use(express.json()); // Middleware para parsear JSON

app.get('/', (req, res) => {
  res.send('API funcionando 🎉');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
