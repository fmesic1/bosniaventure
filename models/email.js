const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Email', emailSchema); 