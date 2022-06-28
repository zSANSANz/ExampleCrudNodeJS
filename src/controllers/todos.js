const todoModel = require('../models/todos');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        todoModel.findById(req.params.todoId, function (err, data) {
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
        todoModel.find({}, function (err, todos) {
            if (err) {
                next(err);
            } else {
                for (let todo of todos) {
                    data.push({
                        id: todo._id,
                        todo_description: todo.todo_description,
                        todo_responsible: todo.todo_responsible,
                        todo_priority: todo.todo_priority,
                        todo_completed: todo.todo_completed
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
        todoModel.findById(req.params.todoId, function (err, todo) {
            if (!todo) {
                res.status(404).send("data is not found");
            } else {
                todo.todo_description = req.body.todo_description;
                todo.todo_responsible = req.body.todo_responsible;
                todo.todo_priority = req.body.todo_priority;
                todo.todo_completed = req.body.todo_completed;
            }
            todo.save().then(todo => {
                res.json('Todo updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        });
    },
    deleteById: function (req, res, next) {
        todoModel.findByIdAndRemove(req.params.todoId, function (err, todo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Todo deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        let todo = new todoModel({
            todo_description: req.body.todo_description,
            todo_responsible: req.body.todo_responsible,
            todo_priority: req.body.todo_priority,
            todo_completed: req.body.todo_completed
        });
        todo.save().then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        }).catch(err => {
            res.status(400).send('adding new todo failed');
        });
    },
}
