import { CommentFromClientType } from "../../models/types/postTypes";

const normalizeComment = (post: CommentFromClientType) => {
  return {
    content: post.content,
  };
};

export default normalizeComment;
