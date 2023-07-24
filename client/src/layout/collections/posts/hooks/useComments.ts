import { useCallback, useState, useMemo } from "react";
import { createComment, deleteComment } from "../services/postApiService";
import useAxios from "../../../../extras/hooks/useAxios";
// import normalizePost from "./../helpers/normalization/normalizePost";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../../../extras/providers/SnackbarProvider";
import PostInterface from "../models/interfaces/PostInterface";
import normalizeComment from "../helpers/normalizations/normalizeComment";
import {
  CommentFromClientType,
  PostMapToModelType,
} from "../models/types/postTypes";
import normalizeEditPost from "../helpers/normalizations/normalizeEditPost";

type PostsType = null | PostInterface[];
type PostType = null | PostInterface;
type ErrorType = null | string;

const useComments = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [posts, setPosts] = useState<PostsType>(null);
  const [post, setPost] = useState<PostType>(null);

  useAxios();

  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    posts: PostsType,
    post: PostType = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setPosts(posts);
    setPost(post);
  };

  const handleCreateComment = useCallback(
    async (commentFromClient: CommentFromClientType) => {
      try {
        setLoading(true);
        const postId = getCurrentPostIdFromUrl();
        const normalizedPost = normalizeComment(commentFromClient);
        const post = await createComment(normalizedPost, postId);
        requestStatus(false, null, null, post);
        snack("success", "A new business post has been created");
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeletecomment = useCallback(
    async (postId: string, commentId: string) => {
      try {
        setLoading(true);
        await deleteComment(postId, commentId);
        snack("success", "The business post has been successfully deleted");
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const value = useMemo(() => {
    return { isLoading, posts, post, error, setPosts };
  }, [isLoading, posts, post, error]);

  return {
    value,
    handleCreateComment,
    handleDeletecomment,
  };
};

export default useComments;

const getCurrentPostIdFromUrl = () => {
  const currentUrl = window.location.href; // Get the current URL
  const urlParts = currentUrl.split("/"); // Split the URL by '/'
  const postIdIndex = urlParts.indexOf("post"); // Find the index of the 'post' segment in the URL
  if (postIdIndex !== -1 && postIdIndex < urlParts.length - 1) {
    // If 'post' segment is found and it's not the last segment in the URL
    return urlParts[postIdIndex + 1]; // Return the part of the URL after 'post'
  }
  return "11ad11111bffdaa34aef60a9"; // Return null if the post ID cannot be extracted
};
