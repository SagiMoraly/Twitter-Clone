import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import PostBody from "../post/PostBody";
import PostAvatar from "../post/PostAvatar";
import { useNavigate } from "react-router-dom";
import CommentInterface from "../../models/interfaces/Comment";
import UserInterface from "../../../users/models/interfaces/UserInterface";

type CommentProps = {
  comment: CommentInterface;
  user: UserInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Comment: React.FC<CommentProps> = ({
  comment,
  onDelete,
  onLike,
  user,
}) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ borderRadius: 0 }}>
      <CardActionArea onClick={() => navigate(`${"/user"}/${user._id}`)}>
        <PostAvatar user={user} time={comment.timestamp} />
      </CardActionArea>

      <PostBody post={comment} />
      {/* 
      <CardActionBar
        postId={comment._id}
        postUserId={comment.author}
        onDelete={onDelete}
        onLike={onLike}
      /> */}
    </MuiCard>
  );
};

export default Comment;
