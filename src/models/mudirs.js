const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MudirSchema = new Schema({
    nama: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tempat: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tgl: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_bln: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tahun: {
        type: String,
        trim: true,
        required: true,
    },
    keluar: {
        type: String,
        trim: true,
        required: true,
    },
    created_at: {
        type: Date,
        trim: true,
        required: true,
    },
});
module.exports = mongoose.model('Mudir', MudirSchema)