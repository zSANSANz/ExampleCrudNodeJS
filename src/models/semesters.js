const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SemesterSchema = new Schema({
    semester: {
        type: Number,
        trim: true,
        required: true,
    },
    tahun_ajaran: {
        type: String,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Semester', SemesterSchema)