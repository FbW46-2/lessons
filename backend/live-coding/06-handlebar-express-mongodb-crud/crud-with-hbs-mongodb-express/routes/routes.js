const express = require("express");
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const url = "mongodb://localhost:27017";
const dbName = "test5";

router.get("/", function (req, res) {
  res.render("home", { title: "CRUD exercises" });
});

router.get("/get-data", function (req, res) {
  const resultArray = [];
  MongoClient.connect(
    url,
    {
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) throw err.message;

      const db = client.db(dbName);
      const collection = db.collection("users2");
      const info = collection.find();

      info.forEach(
        function (doc) {
          resultArray.push(doc);
        },
        function () {
          res.render("home", { title: "CRUD exercises", items: resultArray });
        }
      );
    }
  );
});

router.post("/insert", function (req, res) {
  const item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };

  MongoClient.connect(
    url,
    {
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) throw err.message;

      const db = client.db(dbName);
      const collection = db.collection("users2");
      collection.insertOne(item);
    }
  );
  res.redirect("/");
});

//Assignment
router.post("/update", function (req, res) {
  const id = req.body.id;

  MongoClient.connect(
    url,
    {
      useUnifiedTopology: true,
    },
    function (err, client) {
      if (err) throw err.message;

      const db = client.db(dbName);
      const collection = db.collection("users2");

      // const info = collection.find({ _id: ObjectId(id) }).toArray();
      for (key in req.body) {
        if (Object.values(req.body)) {
          //if key has a value, update only that value
          collection.updateOne(
            { _id: ObjectId(req.body.id) },
            {
              $set: {
                title: req.body[key],
                content: req.body[key],
                author: req.body[key],
              },
            }
          );
        }
      }
      res.redirect("/");
    }
  );
});

// router.post("/update", function (req, res) {
//   const id = req.body.id;

//   MongoClient.connect(
//     url,
//     {
//       useUnifiedTopology: true,
//     },
//     async function (err, client) {
//       if (err) throw err.message;

//       const db = client.db(dbName);
//       const collection = db.collection("users2");

//       const info = await collection.find({ _id: ObjectId(id) }).toArray();

//       const item = {
//         title: req.body.title || info[0].title,
//         content: req.body.content || info[0].content,
//         author: req.body.author || info[0].author,
//       };

//       collection.updateOne({ _id: ObjectId(id) }, { $set: item }, function () {
//         console.log("Item updated");
//         res.redirect("/");
//       });
//     }
//   );
// });

router.post("/delete", function (req, res) {
  const id = req.body.id;

  MongoClient.connect(
    url,
    {
      useUnifiedTopology: true,
    },
    function (err, client) {
      if (err) throw err.message;

      const db = client.db(dbName);
      const collection = db.collection("users2");
      collection.deleteOne({ _id: ObjectId(id) }, function () {
        console.log("Item deleted");
        res.redirect("/");
      });
    }
  );
});

module.exports = router;
