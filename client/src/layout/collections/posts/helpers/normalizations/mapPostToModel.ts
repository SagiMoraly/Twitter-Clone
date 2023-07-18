import PostInterface from "../../models/interfaces/PostInterface";
import { PostMapToModelType } from "../../models/types/postTypes";

const mapPostToModel = (Post: PostInterface): PostMapToModelType => {
  return {
    _id: Post._id,
    content: Post.content,
    url: Post.image.url,
    alt: Post.image.alt,
    author: Post.author,
  };
};

export default mapPostToModel;
