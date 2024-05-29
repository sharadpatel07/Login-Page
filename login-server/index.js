const express = require('express');
const app = express();
const cors = require('cors');
const Auth = require('./auth');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/LoginData")
.then(()=>{
    console.log("connected to Database")
})
.catch((Error)=>{
    console.log(Error)
})
dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/auth' , Auth);

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})