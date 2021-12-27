const barangModel = require('../models/barangs');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        barangModel.findById(req.params.barangId, function (err, barangInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Barang Found!!!", data: { barangs: barangInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let barangsList = [];
        barangModel.find({}, function (err, barangs) {
            if (err) {
                next(err);
            } else {
                for (let barang of barangs) {
                    barangsList.push({
                        id: barang._id,
                        kode_barang: barang.kode_barang,
                        nama_barang: barang.nama_barang,
                        harga_beli: barang.harga_beli,
                        harga_jual: barang.harga_jual,
                        harga_1: barang.harga_1,
                        harga_2: barang.harga_2,
                        harga_3: barang.harga_3
                    });
                }
                res.json({ status: "success", message: "Barang list found!!!", data: { barangs: barangsList } });

            }
        });
    },
    updateById: function (req, res, next) {
        barangModel.findByIdAndUpdate(
            req.params.barangId,
            {
                kode_barang: req.body.kode_barang,
                nama_barang: req.body.nama_barang,
                harga_beli: req.body.harga_beli,
                harga_jual: req.body.harga_jual,
                harga_1: req.body.harga_1,
                harga_2: req.body.harga_2,
                harga_3: req.body.harga_3
            },
            function (err, blogInfo) {
                if (err)
                    next(err);
                else {
                    res.json({ status: "success", message: "Barang updated successfully!!!", data: { title: req.body.title, description: req.body.description } });
                }
            }
        );
    },
    deleteById: function (req, res, next) {
        barangModel.findByIdAndRemove(req.params.barangId, function (err, blogInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Barang deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        barangModel.create({
            title: req.body.title,
            kode_barang: req.body.kode_barang,
            nama_barang: req.body.nama_barang,
            harga_beli: req.body.harga_beli,
            harga_jual: req.body.harga_jual,
            harga_1: req.body.harga_1,
            harga_2: req.body.harga_2,
            harga_3: req.body.harga_3
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Barang added successfully!!!", data: null });

        });
    },
}
