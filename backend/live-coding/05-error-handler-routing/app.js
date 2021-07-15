const express = require("express");

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//Error simulation
app.post("/post", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    res.status(400).json({
      status: "Error",
      message: "Missing required fields: title or author",
    });
  }

  const post = db.post.insert({ title, author });
  res.json(post);
});

//Error handler
app.use(function (err, req, res, next) {
  res.json(err.message);
});

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
