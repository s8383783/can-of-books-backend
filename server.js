'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const BookModel = require('./bookmodel');
const seed = require('./seed');



const app = express();
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true, useUnifiedTopology: true

});

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log('Sucess!'));


app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})
app.get('/addseeds',(request, response) => seed(request, response));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
