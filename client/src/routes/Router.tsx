import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotLogedInPage } from "../layout/pages/NotLogedInPage";
import LoginPage from "../layout/pages/LoginPage";
import SignupPage from "../layout/pages/SignupPage";
import { FeedPage } from "../layout/pages/FeedPage";
import PostDetailsPage from "../layout/pages/PostDetailsPage";
import UserDetailsPage from "../layout/pages/UserDetailsPage";
import EditPostPage from "../layout/pages/EditPostPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotLogedInPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<FeedPage />} />
      <Route path={"/post/:postId"} element={<PostDetailsPage />} />
      <Route path={"/user/:userId"} element={<UserDetailsPage />} />
      <Route path={"/edit/post/:userId"} element={<EditPostPage />} />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
