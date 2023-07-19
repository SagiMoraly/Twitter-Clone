import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import PostHead from "./PostHead";
import PostBody from "./PostBody";
import CardActionBar from "./PostActionBar";
import { useNavigate } from "react-router-dom";
import PostInterface from "../../models/interfaces/PostInterface";

type PostProps = {
  post: PostInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Post: React.FC<PostProps> = ({ post, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} elevation={4}>
      <CardActionArea onClick={() => navigate(`${"/post"}/${post._id}`)}>
        <PostHead image={post.image} />
        <PostBody post={post} />
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
