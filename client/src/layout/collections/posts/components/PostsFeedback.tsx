import React from "react";

import Typography from "@mui/material/Typography";
import Posts from "./Posts";
import PostInterface from "../models/interfaces/PostInterface";
import Spinner from "../../../../extras/components/Spinner";
import Error from "../../../../extras/components/Error";

type PostsFeedbackProps = {
  isLoading: boolean;
  error: string | null;
  posts: PostInterface[] | null;
  onDelete?: (id: string) => void;
  onLike?: () => void;
};

const PostsFeedback: React.FC<PostsFeedbackProps> = ({
  isLoading,
  error,
  posts,
  onLike = () => {},
  onDelete = (postId) => console.log("you deleted post: " + postId),
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (posts && !posts.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no business posts in the database that match the
        parameters you entered!
      </Typography>
    );
  if (posts && posts.length)
    return <Posts posts={posts} onLike={onLike} onDelete={onDelete} />;
  return null;
};

export default PostsFeedback;
