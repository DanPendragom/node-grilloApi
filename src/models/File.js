// database configuration
const Mongoose = require('mongoose');

const File = new Mongoose.Schema({
     name: String,
     size: Number,
     key: String,
     url: String,
     createAt: {
         type: Date,
         default: Date.now
     },
});

module.exports = Mongoose.model('file', File);