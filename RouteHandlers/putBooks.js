'use strict';
const BookModel = require('../Schema/bookmodel');

async function putBooks (req, res) {
  console.log('put book request in');
  const id = req.params.id;
  const putObj = req.body;
  const options = {new: true, overwrite: true};

  try {
    await BookModel.findByIdAndUpdate(id, putObj, options)
    res.status(200).send(putObj);
  }
  catch (e) {
    res.status(500).send(e.message);
  }


}

module.exports = putBooks;