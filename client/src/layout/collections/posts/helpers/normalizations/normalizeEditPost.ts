import { PostMapToModelType } from "../../models/types/postTypes";

const normalizeEditPost = (post: PostMapToModelType) => {
  return {
    _id: post._id,
    content: post.content,
    image: {
      url: post.url,
      alt: post.alt,
    },
    author: post.author,
  };
};

export default normalizeEditPost;
