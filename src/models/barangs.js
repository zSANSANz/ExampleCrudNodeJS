const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const BarangSchema = new Schema({
    kode_barang: {
        type: String,
        trim: true,
        required: true,
    },
    nama_barang: {
        type: String,
        trim: true,
        required: true
    },
    harga_beli: {
        type: Number,
        trim: true,
        required: true,
    },
    harga_jual: {
        type: Number,
        trim: true,
        required: true
    },
    harga_1: {
        type: Number,
        trim: true,
        required: true
    },
    harga_2: {
        type: Number,
        trim: true,
        required: true,
    },
    harga_3: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Barang', BarangSchema)