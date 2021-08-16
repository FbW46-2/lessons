const express = require("express");
const mongoose = require("mongoose");

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
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const PostModel = mongoose.model("post", postSchema);
const CommentModel = mongoose.model("comment", commentSchema);

PostModel.find({})
  .populate("comment")
  .exec((err, post) => console.log(post));

// addPost
// const aPost = new PostModel({ text: "Hello MongoDB!", username: "Bob" });
// //aPost.comments.push({ text: "Great post!", username: "Tom" });

// const aComment = new CommentModel({ text: "Good post!", username: "Jon" });
// aComment.save();

// aPost.comments.push(aComment);
// aPost.save();

// aPost
//   .save()
//   .then(() => {
//     console.log("Post saved!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected to port " + port);
});
