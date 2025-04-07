const { default: mongoose } = require("mongoose");

const reviewsModel = new mongoose.Schema({
   name:{
         type:String,
         required:true
   },
    email:{
            type:String,
            required:true
    },
    feedback:{
            type:String,
            required:true
    },
    rating:{
            type:Number,
            required:true
    },
    givenBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps:true
})

const Reviews = mongoose.model("Reviews", reviewsModel)
module.exports = Reviews;