import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../layout/pages/Feed";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/home" />
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
