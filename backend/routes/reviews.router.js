const express = require('express');
const router = express.Router();
const isToken = require('../middleware/isVerifyToken')
const reviewsModel = require('../schema/reviews.model')
router.post('/addreviews', isToken, async (req, res) => {
    const { name, email, feedback, rating } = req.body;
    const { id } = req.user;
    try {
        const reviews = await reviewsModel.create({ name, email, feedback, rating, givenBy: id });
        res.send({
            success: true,
            message: 'Review Added Successfully',
            data: reviews
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error Adding Review',
            error: error.message
        })
    }
})

router.get('/getreviews', async (req, res) => {
    try {
        const reviews = await reviewsModel.find().populate('givenBy');
        res.send({
            success: true,
            message: 'Reviews Fetched Successfully',
            reviews: reviews
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error Fetching Reviews',
            error: error.message
        })
    }
})

module.exports = router;
