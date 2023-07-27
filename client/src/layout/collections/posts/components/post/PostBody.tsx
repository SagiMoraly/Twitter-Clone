import React from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box } from "@mui/material";
import PostRow from "./PostRow";
import PostInterface from "../../models/interfaces/PostInterface";
import CommentInterface from "../../models/interfaces/Comment";

type PostBodyProps = {
  post: PostInterface | CommentInterface;
};

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <CardContent>
      <CardHeader title={post.content} sx={{ p: 0, mb: 1 }} />
    </CardContent>
  );
};

export default PostBody;
