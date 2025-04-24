import express, { json } from 'express';
import connectDB from './config/db';
const app = express();

connectDB(); // Conexión a MongoDB

app.use(json()); // Middleware para parsear JSON

app.get('/', (req, res) => {
  res.send('API funcionando 🎉');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

import userRoutes from './routes/userRoutes';
app.use('/api', userRoutes);
