"use strict";

const mongoose = require("mongoose");
const Book = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String },
  email: { type: String, required: true },
});

const BookModel = mongoose.model("bookCan", Book);

module.exports = BookModel;