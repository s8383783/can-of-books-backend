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
    bookEntry.save((err, book) => {
      if (err) {
        console.log(err);
      }
      console.log(book._id);
      res.status(200).json(book);
    });

    // console.log(recentUpdate);
    // res.status(200).json(recentUpdate);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("You made a bad request", e.message);
  }
}

module.exports = postBooks;
