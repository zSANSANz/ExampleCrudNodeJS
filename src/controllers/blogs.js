const blogModel = require('../models/blogs');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        blogModel.findById(req.params.blogId, function (err, blogInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Blog found!!!", data: { blogs: blogInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let blogsList = [];
        blogModel.find({}, function (err, blogs) {
            if (err) {
                next(err);
            } else {
                for (let blog of blogs) {
                    blogsList.push({ id: blog._id, title: blog.title, description: blog.description });
                }
                res.json({ status: "success", message: "Blogs list found!!!", data: { blogs: blogsList } });

            }
        });
    },
    updateById: function (req, res, next) {
        blogModel.findByIdAndUpdate(req.params.blogId, { title: req.body.title, description: req.body.description }, function (err, blogInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Blog updated successfully!!!", data: { title: req.body.title, description: req.body.description } });
            }
        });
    },
    deleteById: function (req, res, next) {
        blogModel.findByIdAndRemove(req.params.blogId, function (err, blogInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Blog deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        blogModel.create({ title: req.body.title, description: req.body.description }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Blog added successfully!!!", data: null });

        });
    },
}