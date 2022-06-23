const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NilaiHeadSchema = new Schema({
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
    tf_atau_imtihan: {
        type: Number,
        trim: true,
        required: true,
    },
    nilai_bobot: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('NilaiHead', NilaiHeadSchema)