import { useCallback, useState, useMemo } from "react";
import {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getMyPosts,
  getFavPosts,
  getUserPosts,
  getFeed,
} from "../services/postApiService";
import useAxios from "../../../../extras/hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../../../extras/providers/SnackbarProvider";
import PostInterface from "../models/interfaces/PostInterface";
import normalizePost from "../helpers/normalizations/normalizePost";
import {
  PostFromClientType,
  PostMapToModelType,
} from "../models/types/postTypes";
import normalizeEditPost from "../helpers/normalizations/normalizeEditPost";

type PostsType = null | PostInterface[];
type PostType = null | PostInterface;
type ErrorType = null | string;

const usePosts = () => {
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

  const handleGetPosts = useCallback(async () => {
    try {
      setLoading(true);
      const posts = await getPosts();
      requestStatus(false, null, posts);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetUserPosts = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      const posts = await getUserPosts(userId);
      requestStatus(false, null, posts);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetFeedUserPosts = useCallback(async () => {
    try {
      setLoading(true);
      const posts = await getFeed();
      requestStatus(false, null, posts);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyPosts = useCallback(async () => {
    try {
      setLoading(true);
      const posts = await getMyPosts();
      requestStatus(false, null, posts);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetPost = async (postId: string) => {
    try {
      setLoading(true);
      const post = await getPost(postId);
      requestStatus(false, null, null, post);
      return post;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleGetFavPost = async (userId: string) => {
    try {
      setLoading(true);
      const posts = await getFavPosts(userId);

      requestStatus(false, null, posts);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleCreatePost = useCallback(
    async (postFromClient: PostFromClientType) => {
      try {
        setLoading(true);
        const normalizedPost = normalizePost(postFromClient);
        const post = await createPost(normalizedPost);
        requestStatus(false, null, null, post);
        snack("success", "A new post has been created");
        navigate("/home");
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeletePost = useCallback(async (postId: string) => {
    try {
      setLoading(true);
      await deletePost(postId);
      snack("success", "The post has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleUpdatePost = useCallback(
    async (postFromClient: PostMapToModelType) => {
      try {
        setLoading(true);
        const normalizedPost = normalizeEditPost(postFromClient);
        const postFomServer = await editPost(normalizedPost);
        requestStatus(false, null, null, postFomServer);
        snack("success", "The post has been successfully updated");
        navigate("/home");
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
    handleGetPosts,
    handleGetMyPosts,
    handleGetPost,
    handleCreatePost,
    handleDeletePost,
    handleUpdatePost,
    handleGetFavPost,
    handleGetUserPosts,
    handleGetFeedUserPosts,
  };
};

export default usePosts;
