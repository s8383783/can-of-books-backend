"use strict";

const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const BookModel = require("./bookmodel");
const seed = require("./seed");
const getBooks = require("./getBooks");

const app = express();

// Below is the key for MONGO_CONNECTION_STRING that links to the .env value for localhost:3001

// mongoose.connect(process.env.MONGO_CONNECTION_STRING,
//   {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Below is the key for our mongoDB that links to the .env value 

mongoose.connect(process.env.MONGO_CONNECTION_STRINGS,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Sucess!"));

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
  response.send("test request received");
});
app.get("/addseeds", (request, response) => seed(request, response));

app.get("/books", (req, res) => getBooks(req, res));

app.listen(PORT, () => console.log(`listening on ${PORT}`));

//mongodb+srv://bran2miz:Chanel1580!@cluster0.sh7hf.mongodb.net/Cluster0?retryWrites=true&w=majority