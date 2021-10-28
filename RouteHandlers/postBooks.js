'use strict';


const { request } = require("express");
const { Mongoose } = require("mongoose");
const BookModel = require("../Schema/bookmodel");

async function postBooks(req, res) {
  try{
    const newBook = await BookModel.create(req.body);
    newBook.save();
    console.log(newBook);
    res.status(200).send(newBook);
}

catch (error){
    console.log(error)
    res.status(500).send("error")

}
}


module.exports = postBooks;
