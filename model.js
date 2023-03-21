const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    ip: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("User", userSchema);
