import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app= express();

// Connect to DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.ku36s.mongodb.net/jadwalin?retryWrites=true&w=majority', () => {
    console.log('Connect to DB Succes');
    });

//Middlewares
app.use(morgan('dev'));

//routes
app.get('/', (req,res) => {
    res.json({
        message: 'success',
    });
})

app.listen('8080', () => {
    console.log('App listens to port 8080');
});