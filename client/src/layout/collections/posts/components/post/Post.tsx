import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import PostHead from "./PostHead";
import PostBody from "./PostBody";
import PostAvatar from "./PostAvatar";
import CardActionBar from "./PostActionBar";
import { useNavigate } from "react-router-dom";
import PostInterface from "../../models/interfaces/PostInterface";
import UserInterface from "../../../users/models/interfaces/UserInterface";

type PostProps = {
  post: PostInterface;
  user: UserInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Post: React.FC<PostProps> = ({ post, onDelete, onLike, user }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 700 }} elevation={4}>
      <CardActionArea onClick={() => navigate(`${"/user"}/${user._id}`)}>
        <PostAvatar ProfilePicture={user.profile.profilePicture} />
      </CardActionArea>
      <CardActionArea onClick={() => navigate(`${"/post"}/${post._id}`)}>
        <PostBody post={post} />
        <PostHead image={post.image} />
      </CardActionArea>

      <CardActionBar
        likes={post.likes}
        postId={post._id}
        postUserId={post.author}
        onDelete={onDelete}
        onLike={onLike}
      />
    </MuiCard>
  );
};

export default Post;
