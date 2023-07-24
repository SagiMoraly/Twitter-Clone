import React from "react";
import Grid from "@mui/material/Grid";
import Comment from "../components/comment/Comment";
import Post from "./post/Post";
import PostInterface from "../models/interfaces/PostInterface";
import CommentInterface from "../models/interfaces/Comment";
import UserInterface from "../../users/models/interfaces/UserInterface";

type PostsProps = {
  posts: PostInterface[] | CommentInterface[];
  users: UserInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Posts: React.FC<PostsProps> = ({ posts, onDelete, onLike, users }) => {
  const findUserById = (id: string) => {
    return users.find((user) => user._id === id);
  };

  return (
    <Grid container spacing={0} pb={0}>
      {posts.map((item) => {
        const authorId = item.author;
        const user = findUserById(authorId);

        if (!user) {
          return null;
        }

        if ("comments" in item) {
          return (
            <Grid item key={item._id}>
              <Post
                post={item}
                onDelete={onDelete}
                onLike={onLike}
                user={user}
              />
            </Grid>
          );
        }
        return (
          <Grid item key={item._id}>
            <Comment
              comment={item}
              onDelete={onDelete}
              onLike={onLike}
              user={user}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
