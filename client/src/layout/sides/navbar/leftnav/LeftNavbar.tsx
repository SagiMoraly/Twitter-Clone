import React from "react";
import { Link, useLocation } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useUserLoged } from "../../../collections/users/providers/UserProvider";
import useHandleUsers from "../../../collections/users/hooks/useHandleUsers";
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Typography, Avatar, Box } from "@mui/material";

export const LeftNavbar = () => {
  const { user } = useUserLoged();
  const location = useLocation();
  const { handleLogout } = useHandleUsers();

  const profilePageLink = `/user/${user?._id}`;

  const isActivePage = (link: string) => {
    return link === location.pathname;
  };

  return (
    <div className="navbar">
      <Stack className="stickToRight" alignItems="flex-start" spacing={2}>
        <Button variant="text" component={Link} to="/home">
          <TwitterIcon className="nav-link-text" sx={{ fontSize: 40 }} />
        </Button>
        <Button
          variant="text"
          component={Link}
          to="/home"
          style={{ color: isActivePage("/home") ? "" : "black" }}
        >
          <HomeIcon sx={{ fontSize: 30 }} />
          <Typography className="nav-link-text" variant="h6">
            home
          </Typography>
        </Button>
        <Button
          variant="text"
          component={Link}
          to={profilePageLink}
          style={{ color: isActivePage(profilePageLink) ? "" : "black" }}
        >
          <PermIdentityIcon sx={{ fontSize: 30 }} />
          <Typography className="nav-link-text" variant="h6">
            profile
          </Typography>
        </Button>
        <Button
          variant="text"
          component={Link}
          to="/liked"
          style={{ color: isActivePage("/liked") ? "" : "black" }}
        >
          <FavoriteIcon sx={{ fontSize: 30 }} />
          <Typography className="nav-link-text" variant="h6">
            liked
          </Typography>
        </Button>
        <Button
          variant="text"
          component={Link}
          to="/about"
          style={{ color: isActivePage("/about") ? "" : "black" }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography className="nav-link-text" variant="h6">
            about
          </Typography>
        </Button>
        {/* <Button
          variant="text"
          component={Link}
          to="/tweet"
          style={{ color: isActivePage("/tweet") ? "" : "black" }}
        >
          <ChatIcon sx={{ fontSize: 30 }} />
          <Typography className="nav-link-text" variant="h6">
            tweet
          </Typography>
        </Button> */}

        <div className="logoutBig" style={{ position: "absolute", bottom: 45 }}>
          <Box display="flex" alignItems="center">
            <Avatar alt={user?.alt} src={user?.url} />
            <Typography>{`@${user?.userName}`}</Typography>
            <div>
              <CardActionArea
                onClick={() => {
                  handleLogout();
                }}
              >
                <Typography
                  style={{ position: "absolute", right: 0, marginTop: 20 }}
                >
                  logout
                </Typography>
              </CardActionArea>
            </div>
          </Box>
        </div>
        <div
          className="logoutSmall"
          style={{ position: "absolute", marginLeft: 15, bottom: 45 }}
        >
          <Box display="flex" alignItems="center">
            <div>
              <CardActionArea
                onClick={() => {
                  handleLogout();
                }}
              >
                <LogoutIcon />
              </CardActionArea>
            </div>
          </Box>
        </div>
      </Stack>
    </div>
  );
};
