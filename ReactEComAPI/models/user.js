
const mongoose = require("mongoose");
var validator = require("validator");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: 'FirstName is required'
    },
    lastName: {
        type: String,
        // required: 'LastName is required'
    },
    email: {
        type: String,
        // trim: true,
        // lowercase: true,
        // // unique: true,
        // required: 'Email is required',
        // // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        // required: 'Password is required'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const userReqSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
   
});

// collection creation
const User = new mongoose.model("user", userSchema);

module.exports = User;

