import React, { useEffect, useState } from "react";
import usePosts from "../../layout/collections/posts/hooks/usePosts";

import { useUserLoged } from "../../layout/collections/users/providers/UserProvider";

const useSearch = (whatHandle?: string) => {
  const { value, handleGetFavPost, handleGetPosts, handleGetMyPosts } =
    usePosts();
  const { posts } = value;

  const { user } = useUserLoged();

  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [filteredPosts, setFilteredPosts] = useState(posts); // State variable for filtered cards

  useEffect(() => {
    if (whatHandle == "allPosts") handleGetPosts();
    else if (whatHandle == "favPosts" && user) handleGetFavPost(user?._id);
    else if (whatHandle == "myPosts") handleGetMyPosts();
    else handleGetPosts();
  }, []);

  const filterPosts = () => {
    setFilteredPosts((prevPosts) => {
      if (posts === undefined) {
        return null;
      }
      if (searchQuery.trim() === "") {
        return posts;
      }
      if (prevPosts === null) {
        return null;
      }
      return prevPosts.filter(
        (post) => {
          console.log(post);
        }
        // post.title &&
        // post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return {
    handleSearch,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    setFilteredPosts,
    filterPosts,
  };
};

export default useSearch;
