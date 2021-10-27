"use strict";
const mongoose = require("mongoose");
const Book = require("./bookSchema");

const BookModel = mongoose.model("bookCan", Book);

module.exports = BookModel;
