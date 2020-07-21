const mongoose = require('mongoose');


const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40,
    }, 
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
    }, city: {
        type: String,
    }, state: {
        type: String,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;