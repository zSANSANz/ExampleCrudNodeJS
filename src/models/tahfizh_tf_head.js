const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TahfizhTfHeadSchema = new Schema({
    id_semester: {
        type: Number,
        trim: true,
        required: true,
    },
    id_nilai_head: {
        type: Number,
        trim: true,
        required: true
    },
    target_halaman_semester: {
        type: Number,
        trim: true,
        required: true,
    }
});
module.exports = mongoose.model('TahfizhTfHead', TahfizhTfHeadSchema)