import axios from "axios";
import UserInterface from "../../users/models/interfaces/UserInterface";
import { UserTypeEdit } from "../models/types/userType";
import UserType, { Login, UserRegistered } from "../models/types/userType";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: UserType) => {
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getUser = async (userId: string) => {
  try {
    const { data } = await axios.get<string>(`${apiUrl}/users/${userId}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const editUser = async (normalizedUser: UserTypeEdit) => {
  try {
    const UserToServer = { ...normalizedUser };

    const { data } = await axios.put<UserInterface>(
      `${apiUrl}/Users/${normalizedUser._id}`,
      UserToServer
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get<string>(`${apiUrl}/users`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const DeleteUser = async (userId: string) => {
  try {
    const { data } = await axios.delete<string>(`${apiUrl}/users/${userId}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const followUser = async (userId: string) => {
  try {
    const response = await axios.patch(`${apiUrl}/users/${userId}`, {
      //  $push: { likes: userId }, // could be not nesesery
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getFollowersUser = async (userId: string) => {
  try {
    const { data } = await axios.get<string>(
      `${apiUrl}/users/followers/${userId}`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getFollowingUser = async (userId: string) => {
  try {
    const { data } = await axios.get<string>(
      `${apiUrl}/users/following/${userId}`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

// tested and exist
// router.post("/", register);
// router.post("/login", login);

// exist not tested
// router.get("/:userId", auth, getUser);
// router.put("/:userId", auth, updateUser);
// router.get("/", auth, getUsers);
// router.delete("/:userId", auth, deleteUser);
// router.patch("/follow/:userId", auth, followUser);
// router.get("/followers/:userId", auth, followersUser);
// router.get("/following/:userId", auth, followingUser);

// dont have yet
