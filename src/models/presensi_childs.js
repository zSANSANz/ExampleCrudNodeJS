const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresensiChildSchema = new Schema({
    id_presensi_head: {
        type: Number,
        trim: true,
        required: true,
    },
    id_semester: {
        type: Number,
        trim: true,
        required: true
    },
    id_pelajaran: {
        type: Number,
        trim: true,
        required: true,
    },
    jumlah_kehadiran: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_presensi: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('PresensiChild', PresensiChildSchema)