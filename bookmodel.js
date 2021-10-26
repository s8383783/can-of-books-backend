'use strict';
const mongoose = require('mongoose');
const Book = require('./schema');

const BookModel = mongoose.model('bookCan', Book);

module.exports = BookModel;
