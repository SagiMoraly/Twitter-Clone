import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotLogedInPage } from "../layout/pages/Feed";
import LoginPage from "../layout/pages/LoginPage";
import SignupPage from "../layout/pages/SignupPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotLogedInPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
