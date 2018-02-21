let mongoose = require('mongoose');
mongoose.set('debug', true);

var url = process.env.DATABASEURL || 'mongodb://localhost/todo-api';
mongoose.connect(url);
mongoose.Promise = global.Promise;

module.exports.Todo = require('./todo');
