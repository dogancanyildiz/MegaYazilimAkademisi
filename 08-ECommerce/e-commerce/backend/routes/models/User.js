// create a user class in models/User.js:

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    cart: Array,
});

module.exports = mongoose.model("User", UserSchema);