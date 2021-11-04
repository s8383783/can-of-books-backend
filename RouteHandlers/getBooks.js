const BookModel = require("../Schema/bookmodel");
const getKey = require('./getKey.js');
const jwt = require('jsonwebtoken');

async function getBooks(req, res) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function(error, user) {
    if (error) {
      res.send('invalid token');
    } else {
      const filterQuery = {};
      filterQuery.email = req.query.email;
      const books = await BookModel.find(filterQuery);
      res.send(books);
    }
  });
};
module.exports = getBooks;

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

