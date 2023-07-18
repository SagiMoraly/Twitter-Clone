import { PostFromClientType } from "../../models/types/postTypes";

const normalizePost = (post: PostFromClientType) => {
  return {
    content: post.content,
    image: {
      url: post.url,
      alt: post.alt,
    },
  };
};

export default normalizePost;
