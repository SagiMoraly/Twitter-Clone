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
import { Typography } from "@mui/material";

export const LeftNavbar = () => {
  return (
    <div className="navbar">
      <Stack className="stickToRight" alignItems="flex-start" spacing={2}>
        <Button variant="text" component={Link} to="/">
          <TwitterIcon sx={{ fontSize: 40 }} />
        </Button>
        <Button variant="text" component={Link} to="/home">
          <HomeIcon sx={{ fontSize: 30 }} />{" "}
          <Typography variant="h6">home</Typography>
        </Button>
        <Button variant="text" component={Link} to="/search">
          <SearchIcon sx={{ fontSize: 30 }} />{" "}
          <Typography variant="h6">search</Typography>
        </Button>
        <Button variant="text" component={Link} to="/profile">
          <PermIdentityIcon sx={{ fontSize: 30 }} />{" "}
          <Typography variant="h6">profile</Typography>
        </Button>
        <Button variant="text" component={Link} to="/connect">
          <AlternateEmailIcon sx={{ fontSize: 30 }} />{" "}
          <Typography variant="h6">connect</Typography>
        </Button>
        <Button variant="text" component={Link} to="/tweet">
          <ChatIcon sx={{ fontSize: 30 }} />{" "}
          <Typography variant="h6">tweet</Typography>
        </Button>
      </Stack>
    </div>
  );
};
