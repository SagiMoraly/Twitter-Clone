import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../collections/users/components/UserProfile";
import usePosts from "../collections/posts/hooks/usePosts";
import Spinner from "../../extras/components/Spinner";
import Error from "../../extras/components/Error";
import useUser from "../collections/users/hooks/useUser";
import PostFeedback from "../collections/posts/components/PostsFeedback";
import UserInterface from "../collections/users/models/interfaces/UserInterface";
import { Navigate } from "react-router-dom";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { value, handleDeletePost, handleGetUserPosts } = usePosts();

  const { posts, error, isLoading } = value;
  const { handleGetUser, userValue, handleGetUsers } = useUser();
  const { user } = userValue;
  const [users, setUsers] = useState<UserInterface[] | null>(null);

  useEffect(() => {
    if (userId)
      handleGetUser(userId).then((user) => {
        if (user?._id) {
          setUsers([user]);
          handleGetUserPosts(user._id);
        }
      });
  }, [handleDeletePost]);

  if (!user) return <Navigate replace to={"/"} />;

  const onDeletePost = async (author: string) => {
    await handleDeletePost(author);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !posts && !users) return <p>No post to display...</p>;

  if (!isLoading && posts && user)
    return (
      <div>
        <UserProfile
          user={user}
          onDelete={(id) => console.log("you deleted post: " + id)}
          onLike={() => {}}
        />

        <PostFeedback
          posts={posts}
          users={users}
          error={error}
          isLoading={isLoading}
          onDelete={onDeletePost}
        />
      </div>
    );

  return null;
};

export default UserDetailsPage;
