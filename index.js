const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.urlencoded({extended : true}));
app.use(express.json());


require('./db/conf');

app.use(express.json());
const PORT = process.env.PORT || 4000


app.get('/',(req,res)=> res.send('Welcome To Exela API !'))


app.listen(PORT,()=>{ console.log(`Hey there Hello from ${PORT}`)})