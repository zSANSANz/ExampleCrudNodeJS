const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaporCetakSchema = new Schema({
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
    id_rapor_child: {
        type: Number,
        trim: true,
        required: true,
    },
    id_pelajaran: {
        type: Number,
        trim: true,
        required: true
    },
    id_nilai_head: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_akhir_angka: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_akhir_huruf: {
        type: Number,
        trim: true,
        required: true
    },
    jml_nil: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('RaporCetak', RaporCetakSchema)