"use strict";
const BookModel = require("../Schema/bookmodel");

async function postBooks(req, res) {
  try {
    const Book = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      email: req.body.email,
    };
    const bookEntry = BookModel(Book);
    console.log(BookModel);
    bookEntry.save();
    // console.log("body", req.body);
    res.status(200).json(Book);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Bad Request");
  }
}

module.exports = postBooks;
