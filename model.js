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
    }
})

module.exports = mongoose.model("User", userSchema);
