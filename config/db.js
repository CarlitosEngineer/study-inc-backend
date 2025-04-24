import { connect } from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config(); // ✅

const connectDB = async () => {
  try {
    await connect(dotenv.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB correctamente');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    dotenv.exit(1);
  }
};

export default connectDB;
