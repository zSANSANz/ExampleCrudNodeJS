const nilaiHeadModel = require('../models/nilai_heads');
module.exports = {
    getAll: function (req, res, next) {
        let data = [];
        nilaiHeadModel.find({}, function (err, nilaiHeads) {
            if (err) {
                next(err);
            } else {
                for (let nilaiHead of nilaiHeads) {
                    data.push({
                        id: nilaiHead._id,
                        id_semester: nilaiHead.id_semester,
                        id_pelajaran: nilaiHead.id_pelajaran,
                        tf_atau_imtihan: nilaiHead.tf_atau_imtihan,
                        nilai_bobot: nilaiHead.nilai_bobot,
                    });
                }
                res.json({
                    status: "success",
                    message: "NilaiHead list found!!!",
                    data
                })
            }
        })
    },
    create: function (req, res, next) {
        let nilaiHead = new nilaiHeadModel({
            id_semester : req.body.id_semester,
            id_pelajaran : req.body.id_pelajaran,
            tf_atau_imtihan : req.body.tf_atau_imtihan,
            nilai_bobot : req.body.nilai_bobot,
        });
        nilaiHead.save().then(nilaiHead => {
            res.status(200).json({ 
                status: "success",
                message: "nilaiHead added succesfully",
                nilaiHead
            });
        }).catch(err => {
            res.status(400).send('adding new nilai head failed');
        });
    },

}