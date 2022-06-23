const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MudirSchema = new Schema({
    nama: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tempat: {
        type: Date,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tgl: {
        type: Date,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_bln: {
        type: Date,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tahun: {
        type: Date,
        trim: true,
        required: true,
    },
    keluar: {
        type: Date,
        trim: true,
        required: true,
    },
});
module.exports = mongoose.model('Mudir', MudirSchema)