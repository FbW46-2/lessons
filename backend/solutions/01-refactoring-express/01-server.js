const express = require("express");
//const hostname = "127.0.0.1";
const port = process.env.PORT || 1337;

const app = express();

app.get("/", (req, res) => {
  res.end("Hello World!!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}.`);
});
