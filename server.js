require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dbConnect = require('./config/dbConnect');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 3500;

const logger = require('./middlewares/logger')
const errHandler = require('./middlewares/errHandler')
//connecting to the mongo databse
dbConnect();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors(corsOptions));

//log console 
app.use((req,res,next)=>{
    console.log(`${req.method}\t ${req.originalUrl} \t ${req.ip}`)
    next();
})

app.use(logger);


//routes
app.use('/users',require('./routes/api/users'));
app.use('/employees',require('./routes/api/employees'));


app.all('*',(req,res)=>{
    if(req.accepts('html')){
        res.send('./views/404.html');
    }else if(req.accepts('json')){
        res.json({message:'404 error page not found'});
    }else if(req.accepts('text')){
        res.send('404 page not found');
    }
})

app.use(errHandler)

mongoose.connection.once('open',()=>{
    console.log('mongoDB is connected');
    app.listen(PORT,()=>console.log(`Server Listening on port ${PORT}`));
})