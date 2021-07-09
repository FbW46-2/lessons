const express = require("express");

let router = express.Router();

// /items/books
router
  .route("/books")
  .get((req, res) => {
    res.send("GET /items/books");
  })
  .post((req, res) => {
    res.send("POST /items/books");
  });

// /items/books/:booksid
router
  .route("/books/:bookid")
  .get((req, res) => {
    res.send("GET " + req.params.bookid);
  })
  .put((req, res) => {
    res.send("PUT " + req.params.bookid);
  });

module.exports = router;
