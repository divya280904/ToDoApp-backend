import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app= express();



connectDB();

const allowedOrigins = ['http://localhost:5173', 'https://todoodle-rho.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", (req, res) => res.send("Server is running"));
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


if (process.env.NODE_ENV !=="production"){
  const port= process.env.PORT || 5000;
  app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
}

export default app
