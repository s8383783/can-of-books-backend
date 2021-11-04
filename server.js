"use strict";
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const addSeeds = require("./RouteHandlers/addSeeds");
const getBooks = require("./RouteHandlers/getBooks");
const home = require("./RouteHandlers/home");
const postBooks = require("./RouteHandlers/postBooks");
const deleteOne = require("./RouteHandlers/deleteOne");
const clearDB = require("./RouteHandlers/clearDB");
const putBooks = require("./RouteHandlers/putBooks");
const getKey = require("./RouteHandlers/getKey.js");
const jwt = require('jsonwebtoken');


// Express Setup
const app = express();
const PORT = process.env.PORT || 3002;

// Express permissions/setup
app.use(cors());
app.use(express.json());

// MONGO/MONGOOSE CONNECTION
// Comment out process.env variables with # in .env file to change paths
mongoose.connect(process.env.MONGO_CONNECTION_STRINGS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => console.log("Success!"));
} catch (e) {
  console.log("oops: ", e.message);
}

// ROUTING
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get("/", home);

app.get("/test", (req, res) => res.send("test request received"));

// /books
app.get("/books", getBooks);
app.post("/books", postBooks);
app.delete("/books/:id", deleteOne);
app.put("/books/:id", putBooks);

// Seed Starter Pack
app.get("/addseeds", addSeeds);

// Clear all
app.delete("/clear", clearDB);

// TEST
app.get('/test', async (request, response) => {
  const token = request.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, function (err, user) {
    if (err) {
      response.send('invalid token');
    } else {
      response.send(user);
    }
  });
});

app.get("*", (req, res) => res.status(404).send("We don't understand you."));
