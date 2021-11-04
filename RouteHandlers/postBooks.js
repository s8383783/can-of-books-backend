"use strict";
const BookModel = require("../Schema/bookmodel");
const getKey = require('./getKey.js');
const jwt = require('jsonwebtoken');

async function postBooks(req, res) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function(error, user) {
    if (error) {
      res.send('invalid token');
    } else {
      try {
        const newBook = await BookModel.create(req.body);
        res.status(201).send(newBook);
      } catch (error) {
        console.err.apply(error);
        res.status(500).send('server error')
      }
    }
  });
};
    // console.log(recentUpdate);
    // res.status(200).json(recentUpdate

module.exports = postBooks;

