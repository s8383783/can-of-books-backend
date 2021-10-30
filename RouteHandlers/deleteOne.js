const BookModel = require("../Schema/bookmodel");

async function deleteOne(req, res) {
  console.log('Delete Request')
  console.log(req.params)
  try {
    await BookModel.findByIdAndDelete(req.params.id);
    res.status(204).send('success')
  } catch (error) {
    console.error.apply(error);
    res.status(500).send('server error')
  } 
}

module.exports = deleteOne;
