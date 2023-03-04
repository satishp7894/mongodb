
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: Number,
    address: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// collection creation
const Student = new mongoose.model("student", studentSchema);

module.exports = Student;

