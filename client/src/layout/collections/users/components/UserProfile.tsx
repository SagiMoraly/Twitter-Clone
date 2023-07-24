import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
// import PostHead from "./PostHead";
// import PostBody from "./PostBody";
// import PostAvatar from "./PostAvatar";
// import CardActionBar from "./PostActionBar";
import { useNavigate } from "react-router-dom";
import PostInterface from "../../posts/models/interfaces/PostInterface";
import UserInterface from "../models/interfaces/UserInterface";

type PostProps = {
  user: UserInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const UserProfile: React.FC<PostProps> = ({ onDelete, onLike, user }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 700 }} elevation={4}>
      {/* User Avatar and Name */}
      <CardActionArea onClick={() => navigate(`${"/user"}/${user._id}`)}>
        {/* <PostAvatar user={user} time={post.timestamp} /> */}
        <h2>{user.userName}</h2>{" "}
        {/* Assuming the user object has a 'name' property */}
        {/* Add more user information here, like bio, followers, etc. */}
      </CardActionArea>

      {/* User Actions (e.g., Follow, Message) */}
    </MuiCard>
  );
};

export default UserProfile;
