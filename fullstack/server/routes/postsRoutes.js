import express from "express";
import { getPosts } from "../controllers/postControllers.js";

const router = express.Router();

//http://localhost:5000/posts

router.get("/", getPosts);

export default router;
