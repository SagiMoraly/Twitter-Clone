import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
// import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import Post from "../collections/posts/components/post/Post";
import usePosts from "../collections/posts/hooks/usePosts";
import Spinner from "../../extras/components/Spinner";
import Error from "../../extras/components/Error";
import useUser from "../collections/users/hooks/useUser";
import { CommentToPost } from "../../extras/components/CommentToPost";
import PostsFeedback from "../collections/posts/components/PostsFeedback";
import useComments from "../collections/posts/hooks/useComments";
import UserInterface from "../collections/users/models/interfaces/UserInterface";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { value, handleGetPost } = usePosts();
  const { handleDeletecomment } = useComments();
  const { post, error } = value;
  const { userValue, handleGetUsers } = useUser();
  const { isLoadingUser, users } = userValue;
  const [user, setUser] = useState<UserInterface | null | undefined>(null);

  useEffect(() => {
    if (postId)
      handleGetPost(postId).then((post) => {
        if (post?.author) {
          handleGetUsers().then((users) => {
            const curUser = users?.find((user) => user._id === post?.author);
            setUser(curUser);
          });
        }
      });
  }, []);

  // need to test delete

  const onDeleteComment = async (commentId: string) => {
    if (postId) {
      await handleDeletecomment(postId, commentId);
      await handleGetPost(postId);
    }
  };

  if (isLoadingUser) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoadingUser && !post && !users) return <p>No post to display...</p>;

  console.log("yea", user?._id, post?._id, users);

  if (!isLoadingUser && post && user)
    return (
      <div>
        <Post
          user={user}
          post={post}
          onDelete={(id) => console.log("you deleted post: " + id)}
          onLike={() => {}}
        />
        <PostsFeedback
          posts={post.comments}
          users={users}
          error={error}
          isLoading={isLoadingUser}
          onDelete={onDeleteComment}
        />
        <CommentToPost />
      </div>
    );

  return null;
};

export default PostDetailsPage;
