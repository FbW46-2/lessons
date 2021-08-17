const express = require("express");
const mongoose = require("mongoose");

//const User = require("./model/User");
const user = require("./routes/user");

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/authentication", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connected ...");
});

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API working!" });
});

app.use("/user", user);

app.listen(port, () => {
  console.log("Connected to the port ", port);
});
