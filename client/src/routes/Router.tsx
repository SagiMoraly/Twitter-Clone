import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotLogedInPage } from "../layout/pages/NotLogedInPage";
import LoginPage from "../layout/pages/LoginPage";
import SignupPage from "../layout/pages/SignupPage";
import { FeedPage } from "../layout/pages/FeedPage";
import { About } from "../layout/pages/About";
import { LikedPage } from "../layout/pages/LikedPage";
import PostDetailsPage from "../layout/pages/PostDetailsPage";
import UserDetailsPage from "../layout/pages/UserDetailsPage";
import EditPostPage from "../layout/pages/EditPostPage";
import EditUserPage from "../layout/pages/EditUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotLogedInPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<FeedPage />} />
      <Route path="/liked" element={<LikedPage />} />
      <Route path={"/post/:postId"} element={<PostDetailsPage />} />
      <Route path={"/user/:userId"} element={<UserDetailsPage />} />
      <Route path={"/edit/post/:postId"} element={<EditPostPage />} />
      <Route path={"/edit/user/:userId"} element={<EditUserPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
