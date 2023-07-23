import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
// import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import Post from "../collections/posts/components/post/Post";
import usePosts from "../collections/posts/hooks/usePosts";
import Spinner from "../../extras/components/Spinner";
import Error from "../../extras/components/Error";
import useUser from "../collections/users/hooks/useUser";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { value, handleGetPost } = usePosts();
  const { post, error } = value;
  const { handleGetUser, userValue } = useUser();
  const { user, isLoadingUser } = userValue;

  useEffect(() => {
    if (postId)
      handleGetPost(postId).then((post) => {
        if (post?.author) handleGetUser(post?.author);
      });
  }, []);

  if (isLoadingUser) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoadingUser && !post && !user) return <p>No post to display...</p>;

  if (!isLoadingUser && post && user)
    return (
      <div>
        <Post
          user={user}
          post={post}
          onDelete={(id) => console.log("you deleted post: " + id)}
          onLike={() => {}}
        />
      </div>
    );

  return null;
};

export default PostDetailsPage;
