const express = require("express");
const mongoose = require("mongoose");

const util = require("util");

const app = express();

mongoose.connect("mongodb://localhost:27017/relations", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function () {
  console.log("Database connected ...");
});

const Schema = mongoose.Schema;

// 1st Schmea - commentSchema
const commentSchema = new Schema({
  text: String,
  username: String,
});

// 2nd Schema - postSchema
const postSchema = new Schema({
  text: String,
  username: String,
  //referencing: comments array contains references to (IDs) comments, not actual comments
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const PostModel = mongoose.model("post", postSchema);
const CommentModel = mongoose.model("comment", commentSchema);

// addPost
// const aPost = new PostModel({ text: "Second MongoDB!", username: "Bob" });

// // addComment
// const aComment = new CommentModel({ text: "Great post!", username: "Tom" });

// aComment.save();

// aPost.comments.push(aComment);
// aPost.save();
PostModel.find({})
  .populate("comments")
  .exec((err, post) => console.log(util.inspect(post, true, 10)));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected to port " + port);
});
