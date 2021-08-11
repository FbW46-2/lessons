const express = require("express");
const router = express.Router();
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const adapter = new FileSync("data/db.json");
// const db = low(adapter);
const {
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
  addRecord,
} = require("../controllers/recordsController");

//localhost:3000/records
router.route("/").get(getRecords).post(addRecord);

//localhost:3000/records/:id
router.route("/:id").get(getRecord).delete(deleteRecord).put(updateRecord);

module.exports = router;
