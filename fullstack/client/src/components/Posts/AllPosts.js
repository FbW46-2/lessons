import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

import useStyles from "./stylesAllPosts";

const AllPosts = () => {
  const classes = useStyles(); //classes.container

  const posts = useSelector((state) => state.postReducer);
  console.log("All posts: ", posts);

  return (
    <div>
      <h1>AllPosts</h1>
      <Post />
      <Post />
    </div>
  );
};

export default AllPosts;
