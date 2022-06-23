const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresensiHeadSchema = new Schema({
    id_semester: {
        type: Number,
        trim: true,
        required: true,
    },
    id_pelajaran: {
        type: Number,
        trim: true,
        required: true
    },
    jumlah_kehadiran: {
        type: Number,
        trim: true,
        required: true,
    }
});
module.exports = mongoose.model('PresensiHead', PresensiHeadSchema)