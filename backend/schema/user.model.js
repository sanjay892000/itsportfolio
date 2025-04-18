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
        trim: true,
        default: 'http://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png'
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;