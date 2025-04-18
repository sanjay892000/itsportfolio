const connectToDB = require("./database");
const express = require("express");
require('dotenv').config();
const passport = require('./passport')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT;

connectToDB();
app.use(cors({
    origin: ["http://localhost:5173", "https://sanjay892000.netlify.app"],
    credentials: true, // This is important to allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World! \n Welcome to the Home Page')
})

app.use('/api/user',require("./routes/contact.routes"))
app.use('/auth',require("./routes/auth.router"))
app.use('/api/reviews',require("./routes/reviews.router"))

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})