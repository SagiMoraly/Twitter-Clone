import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ImageInterface from "../../models/interfaces/ImageInterface";

type PostHeadProps = {
  image: ImageInterface;
};

const PostHead = ({ image }: PostHeadProps) => {
  const { url, alt } = image;
  return <CardMedia component="img" image={url} height="194" alt={alt} />;
};

export default PostHead;
