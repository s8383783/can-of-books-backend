const BookModel = require('./bookmodel');

async function getBooks(req, res) {
  await BookModel.find((err, books) => {
    if (err) return res.status(500).send("No BOOKS FOR YOU!");
    res.status(200).send(books);
  });
}

module.exports = getBooks;
