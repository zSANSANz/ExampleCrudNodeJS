const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NilaiImtihanChildsSchema = new Schema({
    id_nilai_head: {
        type: Number,
        trim: true,
        required: true,
    },
    id_semester: {
        type: Number,
        trim: true,
        required: true
    },
    id_pelajar: {
        type: Number,
        trim: true,
        required: true,
    },
    id_pelajaran: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_imtihan: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_imtihan_bobot: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('NilaiImtihanChild', NilaiImtihanChildsSchema)