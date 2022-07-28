const nilaiHeadModel = require('../models/nilai_heads');
module.exports = {
    getAll: function (req, res, next) {
        let data = [];
        nilaiHeadModel.finnd({}, function (err, nilaiHeads) {
            if (err) {
                next(err);
            } else {
                for (let nilaiHead of nilaiHeads) {
                    data.push({
                        id: nilaiHead._id,
                        id_semester: nilaiHead.id_semester,
                        
                    });
                }
                res.json({
                    status: "success",
                    message: "NilaiHead list found!!!",
                    data
                })
            }
        })
    }
}