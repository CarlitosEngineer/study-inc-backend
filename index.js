import express from 'express';
import connectDB from './src/config/db.js';
import userRoutes from './src/modules/User/routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/users', userRoutes); // 👈 rutas para usuarios

app.get('/', (_req, res) => res.send('🚀 API con Mongoose funcionando'));

app.listen(3000, () => console.log('🌐 Servidor corriendo en http://localhost:3000'));

console.log('🌱 URI desde .env:', process.env.MONGODB_URI);
