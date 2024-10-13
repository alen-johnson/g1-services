const mongoose = require('mongoose');

const baseSchema = require('./baseSchema');

module.exports = mongoose.model('sport', baseSchema);