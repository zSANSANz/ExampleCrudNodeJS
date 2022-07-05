const semesterModel = require('../models/semesters');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        semesterModel.findById(req.params.semesterId, function (err, data) {
            if (err) {
                next(err);
            } else {
                res.json({ 
                    status: "success",
                    message: "Semester Found!!!",
                    data
                });
            }
        });
    },
    getAll: function (req, res, next) {
        let data = [];
        semesterModel.find({}, function (err, semesters) {
            if (err) {
                next(err);
            } else {
                for (let semester of semesters) {
                    data.push({
                        id: semester._id,
                        semester: semester.semester,
                        tahun_ajaran: semester.tahun_ajaran,
                        created_at : semester.created_at,
                    });
                }
                res.json({ 
                    status: "success",
                    message: "Semester list found!!!",
                    data 
                });
            }
        });
    },
    updateById: function (req, res, next) {
        semesterModel.findById(req.params.semesterId, function (err, semester) {
            if (!semester) {
                res.status(404).send("data is not found");
            } else {
                semester.semester = req.body.semester;
                semester.tahun_ajaran = req.body.tahun_ajaran;
            }
            semester.save().then(semester => {
                res.json('Semester updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        });
    },
    deleteById: function (req, res, next) {
        semesterModel.findByIdAndRemove(req.params.semesterId, function (err, semester) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Semester deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        let semester = new semesterModel({
            semester: req.body.semester,
            tahun_ajaran: req.body.tahun_ajaran,
        });
        semester.save().then(semester => {
            res.status(200).json({ 'semester': 'semester added successfully' });
        }).catch(err => {
            res.status(400).send('adding new semester failed');
        });
    },
}
