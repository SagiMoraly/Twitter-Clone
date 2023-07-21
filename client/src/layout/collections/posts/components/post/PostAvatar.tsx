import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ProfilePictureInterface from "../../../users/models/interfaces/ProfilePictureInterface";
import Avatar from "@mui/material/Avatar";

type PostHeadProps = {
  ProfilePicture: ProfilePictureInterface;
};

const PostAvatar = ({ ProfilePicture }: PostHeadProps) => {
  console.log(ProfilePicture);

  if (ProfilePicture) {
    const { url, alt } = ProfilePicture;
    return (
      <Avatar aria-label={alt}>
        <CardMedia component="img" image={url} alt={alt} />
      </Avatar>
    );
  }
  return <></>;
};

export default PostAvatar;
