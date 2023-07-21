import React, { useEffect } from "react";
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
  const { user, isLoading } = userValue;

  // console.log(postId);
  // console.log(user);

  useEffect(() => {
    if (postId) {
      handleGetPost(postId);
      if (post?.author) handleGetUser(post?.author);
    }
    console.log(post);
    console.log(user);
  }, []);

  console.log(isLoading, post?._id, user?._id);
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !post && !user) return <p>No post to display...</p>;

  if (!isLoading && post && user)
    return (
      <Container>
        <div>
          <Post
            user={user}
            post={post}
            onDelete={(id) => console.log("you deleted post: " + id)}
            onLike={() => {}}
          />
        </div>
      </Container>
    );

  return null;
};

export default PostDetailsPage;
