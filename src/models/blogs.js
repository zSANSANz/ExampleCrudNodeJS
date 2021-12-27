const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Blog', BlogSchema)