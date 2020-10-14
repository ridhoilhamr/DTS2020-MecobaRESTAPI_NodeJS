import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router.js';

const app= express();

// Connect to DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.ku36s.mongodb.net/jadwalin?retryWrites=true&w=majority', 
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


app.listen('8080', () => {
    console.log('App listens to port 8080');
});