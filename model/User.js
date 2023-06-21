const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        required : true
    },
    password:{
        type : String,
        required : true,
    },
    roles:{
        User:{
            type : Number,
            Default : 2001
        },
        Editor : Number,
        Admin : Number
    },
    refreshToken : String
})

module.exports = mongoose.model('User',userSchema);