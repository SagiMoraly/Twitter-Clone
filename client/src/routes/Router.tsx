import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/home" />
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/about" />
    </Routes>
  );
};

export default Router;
