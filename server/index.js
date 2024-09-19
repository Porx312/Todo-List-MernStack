import express from 'express';
import routes from "./routes/routes.js";
import connectDB from './database/database.js';
import cors from 'cors';
const app = express();
app.use(express.json()); // Para parsear JSON
app.use(cors());
app.use("/", routes);

connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
