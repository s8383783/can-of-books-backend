"use strict";
const BookModel = require("../Schema/bookmodel");

async function postBooks(req, res) {
  const { title, description, status, email } = req.body;
  try {
    const Book = {
      title: title,
      description: description,
      status: status,
      email: email,
    };
    const bookEntry = BookModel(Book);
    bookEntry.save();
    console.log("New Book Posted");
    res.status(200).json(Book);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("You made a bad request", e.message);
  }
}

module.exports = postBooks;
