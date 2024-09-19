import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default connectDB;

