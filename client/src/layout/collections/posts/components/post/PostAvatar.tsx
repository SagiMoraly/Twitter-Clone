import React from "react";
import CardMedia from "@mui/material/CardMedia";
import UserInterface from "../../../users/models/interfaces/UserInterface";
import { Avatar, Typography, Box } from "@mui/material";

type PostHeadProps = {
  user: UserInterface;
  time: Date;
};

const PostAvatar = ({ user, time }: PostHeadProps) => {
  if (user) {
    const { profile, userName } = user;
    const { profilePicture } = profile;
    const { url, alt } = profilePicture;
    const timeString = time.toLocaleString();
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Avatar alt={alt} src={url} />
          <Typography>{`@${userName}`}</Typography>
        </Box>
        <Typography style={{ opacity: 0.6, fontWeight: "lighter" }}>
          {timeString}
        </Typography>
        {/* Add any other content related to the post */}
      </Box>
    );
  }
  return <></>;
};

export default PostAvatar;
