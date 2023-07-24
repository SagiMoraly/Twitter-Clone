import React from "react";

import Typography from "@mui/material/Typography";
import Posts from "./Posts";
import PostInterface from "../models/interfaces/PostInterface";
import Spinner from "../../../../extras/components/Spinner";
import Error from "../../../../extras/components/Error";
import UserInterface from "../../users/models/interfaces/UserInterface";
import Comment from "../models/interfaces/Comment";

type PostsFeedbackProps = {
  isLoading: boolean;
  error: string | null;
  posts: PostInterface[] | Comment[] | null;
  users: UserInterface[] | null;
  onDelete?: (id: string) => void;
  onLike?: () => void;
};

const PostsFeedback: React.FC<PostsFeedbackProps> = ({
  isLoading,
  error,
  posts,
  users,
  onLike = () => {},
  onDelete = (postId) => console.log("you deleted post: " + postId),
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (posts && !posts.length && users && !users.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no posts in the database that match the parameters you
        entered!
      </Typography>
    );
  if (posts && posts.length && users && users.length)
    return (
      <Posts posts={posts} onLike={onLike} onDelete={onDelete} users={users} />
    );
  return null;
};

export default PostsFeedback;
