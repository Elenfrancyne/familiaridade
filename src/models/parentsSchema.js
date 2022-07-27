const mongoose = require('mongoose');
const { stringify } = require('querystring');
const familySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    adress: {
        type: String
    },

    CPF: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        required: true,
        unique: true,
        lowercase: true
    },

    kindOfHelp: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const Parents = mongoose.model("parents", parentsSchema);
module.exports = Parents;