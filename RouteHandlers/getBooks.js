const BookModel = require("../Schema/bookmodel");

async function getBooks(req, res) {
  console.log("Get Books Request");
  try {
    await BookModel.find((err, books) => {
      if (err) return res.status(500).send("No BOOKS FOR YOU!");
      res.status(200).send(books);
      console.log(books);
    }).clone(); // Clone to allow re query the same request. Duplicate Query Execution
  } catch (e) {
    console.log("getBooks Error: ", e.message);
    res.send(e.message);
  }
}

module.exports = getBooks;
