// Example 2: serving JSON
//const http = require("http");
//const hostname = "127.0.0.1";
const express = require("express");
const port = process.env.PORT || 1337;
const app = express();
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
// });
app.get("/", (req, res) => {
  res.send({ text: "hi", numbers: [1, 2, 3] });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}.`);
});
