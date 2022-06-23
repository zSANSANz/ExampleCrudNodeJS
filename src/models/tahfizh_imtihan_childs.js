const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TahfizhImtihanChildSchema = new Schema({
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
    id_nilai_head: {
        type: Number,
        trim: true,
        required: true,
    },
    kesalahan_hal_1: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_2: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_3: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_4: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_5: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_6: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_7: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_8: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_9: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_10: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_11: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_12: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_13: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_14: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_15: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_16: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_17: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_18: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_19: {
        type: Number,
        trim: true,
        required: true
    },
    kesalahan_hal_20: {
        type: Number,
        trim: true,
        required: true
    },
    
    nilai_imtihan: {
        type: Number,
        trim: true,
        required: true
    },
    nilai_imtihan_bobot: {
        type: Number,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('TahfizhImtihanChild', TahfizhImtihanChildSchema)