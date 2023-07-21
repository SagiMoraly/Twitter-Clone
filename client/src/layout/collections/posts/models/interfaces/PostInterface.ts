import Comment from "./Comment";
import ImageInterface from "./ImageInterface";

interface PostInterface {
  _id: string;
  content: string;
  image: ImageInterface;
  author: string;
  timestamp: Date;
  likes: string[];
  comments: Comment[];
}

export default PostInterface;
