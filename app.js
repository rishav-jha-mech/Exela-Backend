const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const billsRouter = require('./routes/billsRouter')


app.use(cors({
    origin: 'https://exela-ddy.pages.dev'
}));

app.use(express.urlencoded({extended : true}));
app.use(express.json());


require('./db/conf');

app.use(express.json());
const PORT = process.env.PORT || 3000


app.use('/',billsRouter)




app.listen(PORT,()=>{ console.log(`Hey there Hello from ${PORT}`)})