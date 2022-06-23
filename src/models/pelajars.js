const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PelajarSchema = new Schema({
    kelas: {
        type: Number,
        trim: true,
        required: true,
    },
    nomor_induk_murid_thn: {
        type: String,
        trim: true,
        required: true
    },
    nomor_induk_murid_kls: {
        type: String,
        trim: true,
        required: true,
    },
    nomor_induk_murid_lp: {
        type: String,
        trim: true,
        required: true
    },
    nomor_induk_murid_nomor: {
        type: String,
        trim: true,
        required: true,
    },
    nama: {
        type: String,
        trim: true,
        required: true
    },
    bin_bintu: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_tempat: {
        type: String,
        trim: true,
        required: true
    },
    tempat_tanggal_lahir_tgl: {
        type: String,
        trim: true,
        required: true,
    },
    tempat_tanggal_lahir_bln: {
        type: String,
        trim: true,
        required: true
    },
    tempat_tanggal_lahir_tahun: {
        type: String,
        trim: true,
        required: true,
    },
    keluar: {
        type: String,
        trim: true,
        required: true
    },
    jumlah: {
        type: String,
        trim: true,
        required: true,
    },
    nomor_kelulusan_thn: {
        type: String,
        trim: true,
        required: true
    },
    nomor_kelulusan_angk: {
        type: String,
        trim: true,
        required: true,
    },
    nomor_kelulusan_no: {
        type: String,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Pelajar', PelajarSchema)