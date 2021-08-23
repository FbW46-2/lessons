import React from "react";
import Post from "./Post/Post";

import useStyles from "./stylesAllPosts";

const AllPosts = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>AllPosts</h1>
      <Post />
      <Post />
    </div>
  );
};

export default AllPosts;
