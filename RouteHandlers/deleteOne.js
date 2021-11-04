const BookModel = require("../Schema/bookmodel");
const getKey = require('./getKey.js');
const jwt = require('jsonwebtoken');

async function deleteOne(req, res) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function (error, user) {
    if (error) {
      res.send('invalid token');
    } else {
      try {
        await BookModel.findByIdAndDelete(req.params.id);
        res.status(204).send('success')
      } catch (error) {
        console.error.apply(error);
        res.status(500).send('server error')
      }
    }
  })
}

module.exports = deleteOne;
