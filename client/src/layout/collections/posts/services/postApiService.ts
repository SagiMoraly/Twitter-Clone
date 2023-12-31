import axios, { AxiosResponse } from "axios";
import PostInterface from "../models/interfaces/PostInterface";
import { NormalizedEditPost } from "../models/types/postTypes";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const createPost = async (normalizedPost: object) => {
  try {
    const { data } = await axios.post(`${apiUrl}/posts`, normalizedPost);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const createComment = async (
  normalizedComment: object,
  postId: string
) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/posts/${postId}`,
      normalizedComment
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const { data } = await axios.delete(
      `${apiUrl}/posts/${postId}/${commentId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const getPosts = async () => {
  try {
    const { data } = await axios.get<PostInterface[]>(`${apiUrl}/posts`);

    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getFavPosts = async (userId: string) => {
  try {
    const { data } = await axios.get<PostInterface[]>(`${apiUrl}/posts`);
    const filteredData = data.filter((post) => post.likes.includes(userId));

    return Promise.resolve(filteredData);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getMyPosts = async () => {
  try {
    const { data } = await axios.get<PostInterface[]>(
      `${apiUrl}/posts/my-posts`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getPost = async (postId: string) => {
  try {
    const { data } = await axios.get<PostInterface>(
      `${apiUrl}/posts/${postId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const deletePost = async (postId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/posts/${postId}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const editPost = async (normalizedPost: NormalizedEditPost) => {
  try {
    const postToServer = { ...normalizedPost };
    delete postToServer._id;
    const { data } = await axios.put<PostInterface>(
      `${apiUrl}/posts/${normalizedPost._id}`,
      postToServer
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const getFeed = async () => {
  try {
    const { data } = await axios.get<PostInterface[]>(`${apiUrl}/posts/feed`);

    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getUserPosts = async (userId: string) => {
  try {
    const { data } = await axios.get<PostInterface[]>(
      `${apiUrl}/posts/postsUser/${userId}`
    );

    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const likePost = async (postId: string) => {
  try {
    const response: AxiosResponse<PostInterface> = await axios.patch(
      `${apiUrl}/posts/${postId}`
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
