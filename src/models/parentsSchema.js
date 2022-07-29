const mongoose = require('mongoose');




const { stringify } = require('querystring');
const parentsSchema = new mongoose.Schema({
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
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
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