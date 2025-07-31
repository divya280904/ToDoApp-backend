import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app= express();

const port= process.env.PORT || 5000;

connectDB();

app.use(cors({
    origin: (origin, callback)=>{
        const allowedOrigins= ['http://localhost:5173','https://todoodle-rho.vercel.app',];
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})