const BookModel = require("../Schema/bookmodel");

async function deleteOne(req, res) {
  try {
    console.log("deleteOne Action");
    const bookId = req.params.id;
    const email = req.query.email;

    const bookToDelete = await BookModel.findByIdAndDelete(bookId);
    if (!bookToDelete) {
      res.status(400).send("Request not found");
    }
    res.send(bookToDelete);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

module.exports = deleteOne;
