//Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SandiTheCodeBender:tTLgEzIAVIwObtZM@cluster0.josi7.mongodb.net/otobookdb?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;