var mongoose = require('mongoose');
var std = mongoose.Schema({
    name: 'string',
    address: 'string',
    age: 'number'
})

var students = mongoose.model('Schema',std);

module.exports = students;
//return schema 