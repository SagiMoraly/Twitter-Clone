import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatIcon from "@mui/icons-material/Chat";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import NavItem from "../../../../extras/components/NavItem";

export const LeftNavbar = () => {
  return (
    <div className="navbar">
      <Stack className="stickToRight">
        <Button variant="text" component={Link} to="/">
          <TwitterIcon />
        </Button>
        <Button variant="text" component={Link} to="/home">
          <HomeIcon /> home
        </Button>
        <Button variant="text" component={Link} to="/search">
          <SearchIcon /> search
        </Button>
        <Button variant="text" component={Link} to="/profile">
          <PermIdentityIcon /> profile
        </Button>
        <Button variant="text" component={Link} to="/connect">
          <AlternateEmailIcon /> connect
        </Button>
        <Button variant="text" component={Link} to="/tweet">
          <ChatIcon /> tweet
        </Button>
      </Stack>
    </div>
  );
};

// import TwitterIcon from "@mui/icons-material/Twitter";
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import ChatIcon from "@mui/icons-material/Chat";

// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

// import NavItem from "../../../../extras/components/NavItem";

// export const LeftNavbar = () => {
//   return (
//     <div className="navbar">
//       <Stack className="stickToRight">
//         <Button variant="text">
//           <TwitterIcon />
//         </Button>
//         <Button variant="text" to="/home">
//           <HomeIcon /> home
//         </Button>
//         <Button variant="text">
//           <SearchIcon /> search
//         </Button>
//         <Button variant="text">
//           <PermIdentityIcon /> profile
//         </Button>
//         <Button variant="text">
//           <AlternateEmailIcon /> connect
//         </Button>
//         <Button variant="text">
//           <ChatIcon /> tweet
//         </Button>
//       </Stack>
//     </div>
//   );
// };
