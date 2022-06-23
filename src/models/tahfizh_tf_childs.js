const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TahfizhTfChildSchema = new Schema({
    id_semester: {
        type: Number,
        trim: true,
        required: true,
    },
    id_pelajar: {
        type: Number,
        trim: true,
        required: true
    },
    id_tahfizh_tf: {
        type: Number,
        trim: true,
        required: true,
    },
    pencapaian_juz: {
        type: Number,
        trim: true,
        required: true
    },
    prestasi_jumlah_halaman: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('TahfizhTfChild', TahfizhTfChildSchema)