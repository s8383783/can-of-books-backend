"use strict";

const BookModel = require("./bookmodel");

function seed(req, res) {
  const seedArr = [
    {
      title: "The Hobbit",
      description: "A book about some friends",
      status: "completed",
      email: "frodo@yahoo.com",
    },
    {
      title: "Carrie",
      description: "A book about a bullied girl",
      status: "deceased",
      email: "pigblood@yahoo.com",
    },
    {
      title: "A hungry caterpillar",
      description: "A book about a very hungry caterpillar",
      status: "hungry",
      email: "caterpillar@yahoo.com",
    },
  ];
  seedArr.forEach((seed) => {
    let entry = new BookModel(seed);
    entry.save();
  });
  res.status(200).send("Database seeded");
}
>>>>>>> main
module.exports = seed;
