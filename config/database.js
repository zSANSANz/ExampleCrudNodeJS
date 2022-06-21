//Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sandi:1TDXtyJTT4AnOY14@cluster0.cpjef.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });

mongoose.Promise = global.Promise;
module.exports = mongoose;
