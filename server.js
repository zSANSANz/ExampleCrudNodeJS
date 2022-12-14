const express = require('express');
const logger = require('morgan');

const users = require('./src/routes/users');
const todos = require('./src/routes/todos');
const mudirs = require('./src/routes/mudirs');
const wali_kelass = require('./src/routes/wali_kelass');
const semesters = require('./src/routes/semesters');
const nilai_heads = require('./src/routes/nilai_heads');
const nilai_imtihan_childs = require('./src/routes/nilai_imtihan_childs');

const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000
app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ "tutorial": "Build REST API with node.js" });
});
// public route
app.use('/users', users);
app.use('/todos', todos);
app.use('/mudirs', mudirs);
app.use('/wali_kelass', wali_kelass);
app.use('/semesters', semesters);
app.use('/nilai_heads', nilai_heads);
app.use('/nilai_imtihan_childs', nilai_imtihan_childs);


// private route
// app.use('/movies', validateUser, movies);


app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });

}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);
    console.log(err.status)
    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong :( !!!" });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))