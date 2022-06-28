const waliKelasModel = require('../models/wali_kelass');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        waliKelasModel.findById(req.params.waliKelasId, function (err, data) {
            if (err) {
                next(err);
            } else {
                res.json({ 
                    status: "success",
                    message: "Wali Kelas Found!!!",
                    data
                });
            }
        });
    },
    getAll: function (req, res, next) {
        let data = [];
        waliKelasModel.find({}, function (err, wali_kelass) {
            if (err) {
                next(err);
            } else {
                for (let wali_kelas of wali_kelass) {
                    data.push({
                        id: wali_kelas._id,
                        kelas : wali_kelas.kelas,
                        nama : wali_kelas.nama,
                        tempat_tanggal_lahir_tempat : wali_kelas.tempat_tanggal_lahir_tempat,
                        tempat_tanggal_lahir_tgl : wali_kelas.tempat_tanggal_lahir_tgl,
                        tempat_tanggal_lahir_bln : wali_kelas.tempat_tanggal_lahir_bln,
                        tempat_tanggal_lahir_tahun : wali_kelas.tempat_tanggal_lahir_tahun,
                        keluar : wali_kelas.keluar,
                        created_at : wali_kelas.created_at,
                    });
                }
                res.json({ 
                    status: "success",
                    message: "Wali Kelas list found!!!",
                    data 
                });
            }
        });
    },
    updateById: function (req, res, next) {
        waliKelasModel.findById(req.params.waliKelasId, function (err, wali_kelas) {
            if (!wali_kelas) {
                res.status(404).send("data is not found");
            } else {
                wali_kelas.kelas = req.body.kelas;
                wali_kelas.nama = req.body.nama;
                wali_kelas.tempat_tanggal_lahir_tempat = req.body.tempat_tanggal_lahir_tempat;
                wali_kelas.tempat_tanggal_lahir_tgl = req.body.tempat_tanggal_lahir_tgl;
                wali_kelas.tempat_tanggal_lahir_bln = req.body.tempat_tanggal_lahir_bln;
                wali_kelas.tempat_tanggal_lahir_tahun = req.body.tempat_tanggal_lahir_tahun;
                wali_kelas.keluar = req.body.keluar;
            }
            wali_kelas.save().then(wali_kelas => {
                res.json('Wali Kelas updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        });
    },
    deleteById: function (req, res, next) {
        waliKelasModel.findByIdAndRemove(req.params.waliKelasIdId, function (err, blogInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Wali Kelas deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        let wali_kelas = new waliKelasModel({
            kelas : req.body.kelas,
            nama : req.body.nama,
            tempat_tanggal_lahir_tempat : req.body.tempat_tanggal_lahir_tempat,
            tempat_tanggal_lahir_tgl : req.body.tempat_tanggal_lahir_tgl,
            tempat_tanggal_lahir_bln : req.body.tempat_tanggal_lahir_bln,
            tempat_tanggal_lahir_tahun : req.body.tempat_tanggal_lahir_tahun,
            keluar : req.body.keluar,
            created_at : new Date(),
        });
        wali_kelas.save().then(wali_kelas => {
            res.status(200).json({ 'wali_kelas': 'wali_kelas added successfully' });
        }).catch(err => {
            res.status(400).send('adding new wali_kelas failed');
        });
    },
}
