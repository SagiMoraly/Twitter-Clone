import React, { useEffect } from "react";
import Container from "@mui/material/Container";
// import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import Post from "../collections/posts/components/post/Post";
import usePosts from "../collections/posts/hooks/usePosts";
import Spinner from "../../extras/components/Spinner";
import Error from "../../extras/components/Error";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { value, handleGetPost } = usePosts();
  const { post, error, isLoading } = value;

  useEffect(() => {
    if (postId) handleGetPost(postId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !post) return <p>No post to display...</p>;

  if (!isLoading && post)
    return (
      <Container>
        <div>
          <Post
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
