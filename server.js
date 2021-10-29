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

// Express Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Express permissions/setup
app.use(cors());
app.use(express.json());

// MONGO/MONGOOSE CONNECTION
// Comment out process.env variables with # in .env file to change paths
mongoose.connect("mongodb://localhost:27017/", {
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

// Seed Starter Pack
app.get("/addseeds", addSeeds);

// Clear all
app.delete("/clear", clearDB);

app.get("*", (req, res) => res.status(404).send("We don't understand you."));
