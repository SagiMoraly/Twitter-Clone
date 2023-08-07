import { useCallback, useState, useMemo } from "react";
import { createComment, deleteComment } from "../services/postApiService";
import useAxios from "../../../../extras/hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../../../extras/providers/SnackbarProvider";
import PostInterface from "../models/interfaces/PostInterface";
import normalizeComment from "../helpers/normalizations/normalizeComment";
import { CommentFromClientType } from "../models/types/postTypes";

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
        snack("success", "A new post has been created");
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
        snack("success", "The post has been successfully deleted");
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
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const postIdIndex = urlParts.indexOf("post");
  if (postIdIndex !== -1 && postIdIndex < urlParts.length - 1) {
    return urlParts[postIdIndex + 1];
  }
  return "11ad11111bffdaa34aef60a9";
};
