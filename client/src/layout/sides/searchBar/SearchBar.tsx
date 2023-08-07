import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useSearch from "../../../extras/hooks/useSearch";
import { useNavigate } from "react-router-dom";
import useUser from "../../collections/users/hooks/useUser";
import { useUserLoged } from "../../collections/users/providers/UserProvider";
import FollowButton from "../../../extras/components/FollowButton";
import MuiCard from "@mui/material/Card";
import { Avatar, CardActionArea, Box } from "@mui/material";

export const SearchBar = () => {
  const { handleSearch, searchQuery, filteredUsers } = useSearch();
  const { handleFollowUser } = useUser();
  const { user } = useUserLoged();
  const navigate = useNavigate();

  return (
    <div className="search">
      {/* Search input */}
      <TextField
        sx={{
          marginLeft: "5px",
          marginRight: "5px",
          maxWidth: 310,
        }}
        label="Search users by username"
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />

      {/* List of filtered users */}
      <List>
        {filteredUsers &&
          filteredUsers.map((curUser, indexForWorning) => {
            if (curUser._id !== user?._id) {
              return (
                <MuiCard
                  sx={{
                    maxWidth: 320,
                    borderRadius: 0,
                    paddingTop: 0.5,
                    paddingLeft: 0.5,
                    paddingRight: 0.5,
                  }}
                  key={indexForWorning}
                >
                  <ListItem key={curUser._id}>
                    <CardActionArea
                      onClick={() => navigate(`${"/user"}/${curUser._id}`)}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Avatar
                          sx={{ marginRight: 2 }}
                          alt={curUser.profile.profilePicture.alt}
                          src={curUser.profile.profilePicture.url}
                        />
                        <ListItemText primary={curUser.userName} />
                      </Box>
                    </CardActionArea>
                    <FollowButton
                      following={curUser.followers}
                      curUser={curUser}
                      onFollow={handleFollowUser}
                    />
                  </ListItem>
                </MuiCard>
              );
            }
            return null;
          })}
      </List>
      <div
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          bottom: 30,
          position: "absolute",
        }}
        onClick={() => {
          navigate("/about");
        }}
      >
        about
      </div>
      {/* 
      <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton> */}
    </div>
  );
};
