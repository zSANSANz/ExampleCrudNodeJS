const mudirModel = require('../models/mudirs');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        mudirModel.findById(req.params.mudirId, function (err, data) {
            if (err) {
                next(err);
            } else {
                res.json({ 
                    status: "success",
                    message: "Todo Found!!!",
                    data
                });
            }
        });
    },
    getAll: function (req, res, next) {
        let data = [];
        mudirModel.find({}, function (err, mudirs) {
            if (err) {
                next(err);
            } else {
                for (let mudir of mudirs) {
                    data.push({
                        id: mudir._id,
                        nama : mudir.nama,
                        tempat_tanggal_lahir_tempat : mudir.tempat_tanggal_lahir_tempat,
                        tempat_tanggal_lahir_tgl : mudir.tempat_tanggal_lahir_tgl,
                        tempat_tanggal_lahir_bln : mudir.tempat_tanggal_lahir_bln,
                        tempat_tanggal_lahir_tahun : mudir.tempat_tanggal_lahir_tahun,
                        keluar : mudir.keluar
                    });
                }
                res.json({ 
                    status: "success",
                    message: "Todo list found!!!",
                    data 
                });
            }
        });
    },
    updateById: function (req, res, next) {
        mudirModel.findById(req.params.mudirId, function (err, mudir) {
            if (!mudir) {
                res.status(404).send("data is not found");
            } else {
                mudir.nama = req.body.nama,
                mudir.tempat_tanggal_lahir_tempat = req.body.tempat_tanggal_lahir_tempat,
                mudir.tempat_tanggal_lahir_tgl = req.body.tempat_tanggal_lahir_tgl,
                mudir.tempat_tanggal_lahir_bln = req.body.tempat_tanggal_lahir_bln,
                mudir.tempat_tanggal_lahir_tahun = req.body.tempat_tanggal_lahir_tahun,
                mudir.keluar = req.body.keluar
            }
            mudir.save().then(mudir => {
                res.json('Todo updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        });
    },
    deleteById: function (req, res, next) {
        mudirModel.findByIdAndRemove(req.params.mudirId, function (err, blogInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Todo deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        let mudir = new mudirModel({
            nama : req.body.nama,
            tempat_tanggal_lahir_tempat : req.body.tempat_tanggal_lahir_tempat,
            tempat_tanggal_lahir_tgl : req.body.tempat_tanggal_lahir_tgl,
            tempat_tanggal_lahir_bln : req.body.tempat_tanggal_lahir_bln,
            tempat_tanggal_lahir_tahun : req.body.tempat_tanggal_lahir_tahun,
            keluar : req.body.keluar,
        });
        mudir.save().then(mudir => {
            res.status(200).json({ 'mudir': 'mudir added successfully' });
        }).catch(err => {
            res.status(400).send('adding new mudir failed');
        });
    },
}
