"use-strict";

const BookModel = require("../Schema/bookmodel");

async function clearDB(req, res) {
  try {
    await BookModel.deleteMany({});
    res.send("DB Cleared");
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = clearDB;
