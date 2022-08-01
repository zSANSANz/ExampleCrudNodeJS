const nilaiImtihanChildModel = require('../models/nilai_imtihan_childs');
module.exports = {
    getAll: function (req, res, next) {
        let data = [];
        nilaiImtihanChildModel.find({}, function (err, nilaiImtihanChilds) {
            if (err) {
                next(err);
            } else {
                for (let nilaiImtihanChild of nilaiImtihanChilds) {
                    data.push({
                        id_nilai_head: nilaiImtihanChild.id_nilai_head,
                        id_semester: nilaiImtihanChild.id_semester,
                        id_pelajar: nilaiImtihanChild.id_pelajar,
                        id_pelajaran: nilaiImtihanChild.id_pelajaran,
                        nilai_imtihan: nilaiImtihanChild.nilai_imtihan,
                        nilai_imtihan_bobot: nilaiImtihanChild.nilai_imtihan_bobot,
                    });
                }
                res.json({
                    status: "success",
                    message: "NilaiImtihanChild list found!!!",
                    data
                })
            }
        })
    },
    create: function (req, res, next) {
        let nilaiImtihanChild = new nilaiImtihanChildModel({
            id_nilai_head: req.body.id_nilai_head,
            id_semester: req.body.id_semester,
            id_pelajar: req.body.id_pelajar,
            id_pelajaran: req.body.id_pelajaran,
            nilai_imtihan: req.body.nilai_imtihan,
            nilai_imtihan_bobot: req.body.nilai_imtihan_bobot,
        });
        nilaiImtihanChild.save().then(nilaiHead => {
            res.status(200).json({
                status: "success",
                message: "nilaiImtihanChild added succesfully",
                nilaiImtihanChild
            });
        }).catch(err => {
            res.status(400).send('adding new nilai head failed');
        });
    },
}
