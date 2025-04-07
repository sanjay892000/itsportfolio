const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    avatar: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;