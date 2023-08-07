import React, { useEffect, useState } from "react";
import usePosts from "./usePosts";

const useGetFav = () => {
  const { value, handleGetPosts } = usePosts();
  const { posts } = value;

  const [searchUser, setSearchUser] = useState("");
  const [filteredFavPosts, setFilteredFavPosts] = useState(posts);

  useEffect(() => {
    handleGetPosts();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      if (posts === undefined) {
        setFilteredFavPosts(null);
      } else if (searchUser) {
        setFilteredFavPosts(posts);
      } else {
        const filtered = posts?.filter((post) =>
          post.likes.includes(searchUser)
        );
        setFilteredFavPosts(filtered || null);
      }
    };

    filterPosts();
  }, [posts, searchUser]);

  const getUserId = (userId: string) => {
    setSearchUser(userId);
  };

  return {
    getUserId,
    searchUser,
    setSearchUser,
    filteredFavPosts,
    setFilteredFavPosts,
  };
};

export default useGetFav;
