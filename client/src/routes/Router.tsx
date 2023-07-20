import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotLogedInPage } from "../layout/pages/NotLogedInPage";
import LoginPage from "../layout/pages/LoginPage";
import SignupPage from "../layout/pages/SignupPage";
import { FeedPage } from "../layout/pages/FeedPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotLogedInPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<FeedPage />} />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
