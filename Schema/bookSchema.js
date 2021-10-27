"use strict";

const mongoose = require("mongoose");
const Book = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
  email: { type: String },
});

module.exports = Book;
