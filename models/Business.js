const mongoose = require('mongoose');
const BusinessScema = mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    tradeLicence:{
        type:String,
        required:false
    },
    lat:{
        type:String,
        required:false
    },
    lng:{
        type:String,
        required:false
    },
    details:{
        type:String,
        required:false
    },
});

module.exports = mongoose.model('Business',BusinessScema);