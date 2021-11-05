'use strict';
const { response } = require('express');
const BookModel = require('../Schema/bookmodel');
const getKey = require('./getKey.js');
const jwt = require('jsonwebtoken');

async function putBooks (req, res) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function(error, user) {
    if (error) {
      res.send('invalid token');
    } else{
      try{
        const id = req.params.id;
        const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, {new: true});
        res.send(updatedBook);
      } catch (error) {
        console.error(error);
        res.status(400).send(`unable to update book ${id}`);
      }
    }
  })
}

module.exports = putBooks;