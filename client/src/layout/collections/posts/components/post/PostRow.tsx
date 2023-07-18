import React from "react";
import Typography from "@mui/material/Typography";

type PostRowProps = {
  title: string;
  content: string;
};

const PostRow = ({ title, content }: PostRowProps) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <Typography fontWeight={700} component="span">
        {title}:
      </Typography>
      {content}
    </Typography>
  );
};

export default PostRow;
