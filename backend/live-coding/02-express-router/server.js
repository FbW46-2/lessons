const express = require("express");
const items = require("./routes/items");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("I am at home!");
});

//use the items.js file to handle endpoints that start with /items
app.use("/items", items);

app.listen(port, () => console.log(`Listening on port: `, port));
