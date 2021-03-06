"use strict";

const BookModel = require("../Schema/bookmodel");

function addSeeds(req, res) {
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
    {
      title: "Lunch Time",
      description: "A story about a sandwich.",
      status: "Read",
      email: "HamSandwich@deli.com",
    },
  ];
  seedArr.forEach((seed) => {
    let entry = new BookModel(seed);
    entry.save();
  });
  res.status(200).send("Database seeded");
}

module.exports = addSeeds;
