import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router.js';

const app= express();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
,() => {
    console.log('Connect to DB Succes');
    });

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.get('/', (req,res) => {
    res.json({
        message: 'success',
    });
})

// http://localhost:8080/api/homework
app.use('/api', router);

// const PORT = process.env.PORT || '4000';


app.listen(process.env.PORT, () => {
    console.log(`App listens to port ${process.env.PORT}`);
});