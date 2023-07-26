import React, { useEffect, useState } from "react";
import useUser from "../../layout/collections/users/hooks/useUser";

import { useUserLoged } from "../../layout/collections/users/providers/UserProvider";

const useSearch = () => {
  const { userValue, handleGetUsers } = useUser();
  const { users } = userValue;

  const { user } = useUserLoged();

  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [filteredUsers, setFilteredUsers] = useState(users); // State variable for filtered cards

  useEffect(() => {
    handleGetUsers();
  }, []);

  const filterUsers = () => {
    setFilteredUsers((prevUsers) => {
      if (users === undefined) {
        return null;
      }
      if (searchQuery.trim() === "") {
        return users;
        // return null;
      }
      if (prevUsers === null) {
        return null;
      }
      return prevUsers.filter(
        (user) =>
          user.userName &&
          user.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };
  // console.log(user.userName, searchQuery);
  // console.log(
  //   user.userName.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  useEffect(() => {
    filterUsers();
  }, [users, searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return {
    handleSearch,
    searchQuery,
    setSearchQuery,
    filteredUsers,
    setFilteredUsers,
    filterUsers,
  };
};

export default useSearch;
