const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;

const url = "mongodb://127.0.0.1:27017";
const dbName = "darko";

//middileware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

//GET
app.get("/get", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    if (err) throw err.message;
    console.log("Connected!");

    const resultArray = [];
    const db = client.db(dbName);
    const collection = db.collection("users");

    const info = collection.find();

    info.forEach(
      (doc) => {
        resultArray.push(doc);
      },
      () => {
        res.json(resultArray);
      }
    );
  });
});

//POST
app.post("/", (req, res) => {
  const item = {
    fname: req.body.fname,
    lname: req.body.lname,
  };

  MongoClient.connect(url, (err, client) => {
    if (err) throw err.message;
    console.log("Connected!");

    const db = client.db(dbName);
    const collection = db.collection("users");

    collection.insertOne(item);
  });
  res.redirect("/get");
});

app.listen(port, () => console.log("Listening on port: ", port));
