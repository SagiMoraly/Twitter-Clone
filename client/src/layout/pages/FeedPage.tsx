import usePosts from "../collections/posts/hooks/usePosts";
import React, { useEffect } from "react";
import { useUserLoged } from "../collections/users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import PostFeedback from "../collections/posts/components/PostsFeedback";
import useUser from "../collections/users/hooks/useUser";

import { Twitting } from "../../extras/components/Twitting";

export const FeedPage = () => {
  const { value, handleGetFeedUserPosts, handleDeletePost } = usePosts();
  const { posts, error, isLoading } = value;
  const { user } = useUserLoged();
  const { handleGetUsers, userValue } = useUser();
  const { users } = userValue;

  useEffect(() => {
    handleGetFeedUserPosts();
    handleGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeletePost = async (author: string) => {
    await handleDeletePost(author);
    await handleGetFeedUserPosts();
  };

  if (!user) return <Navigate replace to={"/"} />;

  //   console.log(user);
  return (
    <div>
      <div style={{ borderBottom: "2px solid #e7ecf0" }}>
        <h1 style={{ marginLeft: "8px" }}>Home</h1>
      </div>
      <Twitting />
      <div style={{ borderTop: "15px solid #e7ecf0" }}>
        <PostFeedback
          posts={posts}
          users={users}
          error={error}
          isLoading={isLoading}
          onDelete={onDeletePost}
        />
      </div>
    </div>
  );
};
