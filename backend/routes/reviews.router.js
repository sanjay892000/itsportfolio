const express = require('express');
const router = express.Router();
const isLoggedin = require('../middleware/isLoggedin')
router.post('/addreviews', isLoggedin, async (req,res)=>{
    const {name, email, feedback, rating} = req.body;
})

module.exports = router;