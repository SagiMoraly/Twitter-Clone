import React from "react";
import Grid from "@mui/material/Grid";
import Post from "./post/Post";
import PostInterface from "../models/interfaces/PostInterface";

type PostsProps = {
  posts: PostInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Posts: React.FC<PostsProps> = ({ posts, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
          <Post post={post} onDelete={onDelete} onLike={onLike} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
