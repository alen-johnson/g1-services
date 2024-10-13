const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const baseSchema = new Schema( {
    name : {
        type : String,
        required : true
    }
})

module.exports = baseSchema;