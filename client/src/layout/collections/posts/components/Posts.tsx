import React from "react";
import Grid from "@mui/material/Grid";
import Post from "./post/Post";
import PostInterface from "../models/interfaces/PostInterface";
import UserInterface from "../../users/models/interfaces/UserInterface";

type PostsProps = {
  posts: PostInterface[];
  users: UserInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Posts: React.FC<PostsProps> = ({ posts, onDelete, onLike, users }) => {
  const findUserById = (id: string) => {
    return users.find((user) => user._id === id);
  };

  return (
    <Grid container spacing={2} pb={2}>
      {posts.map((post) => {
        const authorId = post.author;
        const user = findUserById(authorId);

        if (!user) {
          return null;
        }

        return (
          <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
            <Post post={post} onDelete={onDelete} onLike={onLike} user={user} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
