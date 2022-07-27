const mongoose = require('mongoose');



const { stringify } = require('querystring');
const familySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nameOwner: {
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
    citty: {
        type: String,

    },
    numberOfMembers: {
        type: Number,

    },
    minor: {
        type: Number,

    },
    nameOfMembers: {
        type: Array,

    },
    averageWage: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: true,
        unique: true
    },
    lack: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const Family = mongoose.model("family", familySchema);

module.exports = Family