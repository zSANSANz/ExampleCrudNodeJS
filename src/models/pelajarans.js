const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PelajaranSchema = new Schema({
    kode: {
        type: String,
        trim: true,
        required: true,
    },
    nama_pelajaran: {
        type: String,
        trim: true,
        required: true
    },
    keterampilan_atau_penalaran_atau_penghayatan: {
        type: String,
        trim: true,
        required: true,
    },
    satuan_pelajaran: {
        type: String,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Pelajaran', PelajaranSchema)