import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postControllers.js";

const router = express.Router();

//http://localhost:5000/posts/

router.get("/", getPosts);
router.post("/", createPost);

router.patch("/:id", updatePost);

//delete route - router.delete
router.delete("/:id", deletePost);

//likePost
router.patch("/:id/likepost", likePost);

export default router;
