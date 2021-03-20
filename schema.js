const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = 10;
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        lowercase: true
    },
    password: String,
});

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;