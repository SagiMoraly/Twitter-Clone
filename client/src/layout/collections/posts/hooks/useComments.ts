import { useCallback, useState, useMemo } from "react";
import { createComment } from "../services/postApiService";
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
    async (commentFromClient: CommentFromClientType, userId: string) => {
      try {
        setLoading(true);
        const normalizedPost = normalizeComment(commentFromClient);
        const post = await createComment(normalizedPost, userId);
        requestStatus(false, null, null, post);
        snack("success", "A new business post has been created");
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
  };
};

export default useComments;
