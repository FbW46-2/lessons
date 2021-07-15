const express = require("express");
const port = process.env.port || 5000;
//const cors = require("cors");

const app = express();

const ingredients = [
  {
    id: "1",
    item: "Bacon",
  },
  {
    id: "2",
    item: "Eggs",
  },
  {
    id: "3",
    item: "Milk",
  },
  {
    id: "4",
    item: "Butter",
  },
];

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET"],
//   })
// );

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  next();
});

app.get("/ingredients", (req, res) => {
  res.json(ingredients);
});

app.listen(port, () => console.log(`Listening on port: `, port));
