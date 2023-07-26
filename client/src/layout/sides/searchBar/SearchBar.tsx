// import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import useSearch from "../../../extras/hooks/useSearch"; // Make sure to import the useSearch hook from the correct location
// import { useNavigate } from "react-router-dom";
// import useUser from "../../collections/users/hooks/useUser";
// import { useUserLoged } from "../../collections/users/providers/UserProvider";

// export const SearchBar = () => {
//   const { handleSearch, searchQuery, filteredUsers } = useSearch();
//   const { handleFollowUser } = useUser();
//   const { user } = useUserLoged();
//   const navigate = useNavigate();
//   const [hasUserFollow, setHasUserFollow] = useState(false);

//   useEffect(() => {
//     if (user && curUser?.includes(user?._id)) {
//       setHasUserFollow(true);
//     } else {
//       setHasUserFollow(false);
//     }
//   }, [user]);

//   return (
//     <div className="search">
//       {/* Search input */}
//       <TextField
//         label="Search users by username"
//         value={searchQuery}
//         onChange={handleSearch}
//         fullWidth
//         margin="normal"
//       />

//       {/* List of filtered users */}
//       <List>
//         {filteredUsers &&
//           filteredUsers.map((curUser) => {
//             if (curUser._id !== user?._id) {
//               // user && setHasUserFollow(curUser.following.includes(user?._id));
//               return (
//                 <ListItem key={curUser._id}>
//                   <ListItemText
//                     primary={curUser.userName}
//                     onClick={() => navigate(`${"/user"}/${curUser._id}`)}
//                   />

//                   <button
//                     onClick={() => {
//                       handleFollowUser(curUser._id);
//                       setHasUserFollow(!hasUserFollow);
//                     }}
//                   >
//                     {user && hasUserFollow ? "Unfollow" : "Follow"}
//                   </button>
//                 </ListItem>
//               );
//             }
//             return null;
//           })}
//       </List>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useSearch from "../../../extras/hooks/useSearch";
import { useNavigate } from "react-router-dom";
import useUser from "../../collections/users/hooks/useUser";
import { useUserLoged } from "../../collections/users/providers/UserProvider";
import FollowButton from "../../../extras/components/FollowButton";

export const SearchBar = () => {
  const { handleSearch, searchQuery, filteredUsers } = useSearch();
  const { handleFollowUser } = useUser();
  const { user } = useUserLoged();
  const navigate = useNavigate();
  // const [hasUserFollow, setHasUserFollow] = useState(false);

  // useEffect(() => {
  //   console.log(filteredUsers);

  //   if (filteredUsers)
  //     if (user && filteredUsers.some((curUser) => curUser._id === user._id)) {
  //       setHasUserFollow(true);
  //     } else {
  //       setHasUserFollow(false);
  //     }
  // }, [user, filteredUsers]);
  // console.log(filteredUsers);

  return (
    <div className="search">
      {/* Search input */}
      <TextField
        label="Search users by username"
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />

      {/* List of filtered users */}
      <List>
        {filteredUsers &&
          filteredUsers.map((curUser) => {
            // console.log(curUser.followers);
            if (curUser._id !== user?._id) {
              return (
                <ListItem key={curUser._id}>
                  <ListItemText
                    primary={curUser.userName}
                    onClick={() => navigate(`${"/user"}/${curUser._id}`)}
                  />

                  <FollowButton
                    following={curUser.followers}
                    curUser={curUser}
                    onFollow={handleFollowUser}
                  />
                </ListItem>
              );
            }
            return null;
          })}
      </List>
    </div>
  );
};
