const BookModel = require("../Schema/bookmodel");
const getKey = require('./getKey.js');
const jwt = require('jsonwebtoken');

async function deleteOne(request, response) {
  const token = request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function (error, user) {
    if (error) {
      response.send('invalid token');
    } else {
      try {
        await BookModel.findByIdAndDelete(request.params.id);
        response.status(204).send('success')
      } catch (error) {
        console.error.apply(error);
        response.status(500).send('server error')
      }
    }
  })
}

module.exports = deleteOne;
