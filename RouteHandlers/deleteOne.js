const BookModel = require("../Schema/bookmodel");

async function deleteOne(req, res) {
  try {
    console.log("deleteOne Action");
    const bookId = req.params.id;
    const email = req.query.email;

    const bookToDelete = await BookModel.findOne({_id: bookId, email});

    if(!bookToDelete) {
      res.status(400).send('Error: Book could not be deleted.');
      return;
    }
    if (bookToDelete.email !== email) {
      res.status(400).send('Error: Book could not be deleted.');
      return;
    }
    
    await BookModel.findByIdAndDelete(id);
    res.send('success');

  }
  catch (error) {
    console.error(error);
    res.status(400).send('Error: Book could not be deleted.');
  }
}

module.exports = deleteOne;
