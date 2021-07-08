// Example 3: basic routing
const { response } = require("express");
const express = require("express");
const port = process.env.PORT || 1337;
const app = express();

function respondText(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("hi");
}

function respondJson(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
}

function respondNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

// depending on the URL the user enters, the server responds with text,
// json, or with a 404 "Not found" message
// const server = http.createServer((req, res) => {
//   if (req.url === "/") return respondText(req, res);
//   if (req.url === "/json") return respondJson(req, res);
//   respondNotFound(req, res);
// });

app.get("/", respondText);

app.get("/json", respondJson);

app.get("*", respondNotFound);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}.`);
});
