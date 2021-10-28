const { request } = require("express");
const BookModel = require("../Schema/bookmodel");

async function getBooks(req, res) {
const email = req.query.email;
const emailBooks = await BookModel.find({email: email});
res.send(emailBooks);
console.log(email);
  
  // const filterQuery = {};
  // if (req.query.email){
  //   filterQuery.email = req.query.email;
  // }
  // console.log("Get Books Request");
  // // try {
  //   await BookModel.find((err, books) => {
  //     if (err) return res.status(500).send("No BOOKS FOR YOU!");
  //     res.status(200).send(books);
  //     console.log(books);
  //   }).clone(); // Clone to allow re query the same request. Duplicate Query Execution
  // // } catch (e) {
  //   console.log("getBooks Error: ", e.message);
  //   res.send(e.message);
  // // }
}

module.exports = getBooks;
