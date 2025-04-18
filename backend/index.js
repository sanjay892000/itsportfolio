const connectToDB = require("./database");
const express = require("express");
require('dotenv').config();
const passport = require('./passport')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT;

connectToDB();
app.use(cors());
app.use(express.json());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World! \n Welcome to the Home Page')
})

app.use('/api/contact', require("./routes/contact.routes"))
app.use('/auth', require("./routes/auth.router"))
app.use('/api/reviews', require("./routes/reviews.router"))

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})