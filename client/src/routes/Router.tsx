import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../layout/pages/Feed";
import LoginPage from "../layout/pages/LoginPage";
import SignupPage from "../layout/pages/SignupPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/home" />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
