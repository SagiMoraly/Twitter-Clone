import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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

  if (!postId) return <Navigate replace to={"/"} />;

  const onDeleteComment = async (commentId: string) => {
    if (postId) {
      await handleDeletecomment(postId, commentId);
      await handleGetPost(postId);
    }
  };

  if (isLoadingUser) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoadingUser && !post && !users) return <p>No post to display...</p>;

  if (!isLoadingUser && post && user)
    return (
      <div>
        <Post
          user={user}
          post={post}
          onDelete={(id) => console.log("you deleted post: " + id)}
          onLike={() => {}}
        />
        <div style={{ borderTop: "15px solid #e7ecf0" }}></div>
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
