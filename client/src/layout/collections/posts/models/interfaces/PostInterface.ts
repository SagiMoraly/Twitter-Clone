import Comment from "./Comment";
import ImageInterface from "./ImageInterface";

interface PostInterface {
  _id: string;
  content: string;
  image: ImageInterface;
  author: string;
  createdAt: Date;
  likes: string[];
  comments: Comment[];
}

export default PostInterface;
