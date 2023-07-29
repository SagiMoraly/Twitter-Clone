import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import { useUserLoged } from "../../../collections/users/providers/UserProvider";
import useHandleUsers from "../../../collections/users/hooks/useHandleUsers";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";

export const BottomNavbar = () => {
  const { user } = useUserLoged();
  const { handleLogout } = useHandleUsers();
  const location = useLocation();

  const profilePageLink = `/user/${user?._id}`;

  const isActivePage = (link: string) => {
    return link === location.pathname;
  };

  return (
    <div className="bottomNavbar">
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <BottomNavigationAction
              label="Home"
              component={Link}
              to="/home"
              icon={
                <HomeIcon
                  style={{ color: isActivePage("/home") ? "#26a7de" : "black" }}
                />
              }
            />
            <BottomNavigationAction
              label="Profile"
              component={Link}
              to={profilePageLink}
              icon={
                <PermIdentityIcon
                  style={{
                    color: isActivePage(profilePageLink) ? "#26a7de" : "black",
                  }}
                />
              }
            />
            <BottomNavigationAction
              label="Liked"
              component={Link}
              to="/liked"
              icon={
                <FavoriteIcon
                  style={{
                    color: isActivePage("/liked") ? "#26a7de" : "black",
                  }}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => {
                handleLogout();
              }}
              label="Logou"
              icon={<LogoutIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};
