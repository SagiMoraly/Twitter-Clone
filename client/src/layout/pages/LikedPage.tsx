import usePosts from "../collections/posts/hooks/usePosts";
import React, { useEffect, useState } from "react";
import { useUserLoged } from "../collections/users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import PostFeedback from "../collections/posts/components/PostsFeedback";
import useUser from "../collections/users/hooks/useUser";

import { Twitting } from "../../extras/components/Twitting";

export const LikedPage = () => {
  const { value, handleGetFavPost, handleDeletePost } = usePosts();
  const { posts, error, isLoading } = value;
  const { user } = useUserLoged();
  const { handleGetUsers, userValue } = useUser();
  const { users } = userValue;

  useEffect(() => {
    if (user) handleGetFavPost(user?._id);
    handleGetUsers();
  }, []);

  const onDeletePost = async (author: string) => {
    await handleDeletePost(author);
    if (user) await handleGetFavPost(user?._id);
  };

  if (!user) return <Navigate replace to={"/"} />;

  return (
    <div>
      <div style={{ borderBottom: "2px solid #e7ecf0" }}>
        <h1 style={{ marginLeft: "8px" }}>Liked</h1>
      </div>
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
