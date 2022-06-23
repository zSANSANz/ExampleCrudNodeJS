const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NilaiTfChildsSchema = new Schema({
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
    id_pelajaran: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_tf1: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf2: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_tf3: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf4: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf5: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_tf6: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf7: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf8: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_tf9: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_tf10: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_rata2_formatif: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_rata2_formatif_bobot: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('NilaiTfChild', NilaiTfChildsSchema)