import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Tutor from "../components/Tutor";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tutor/:id" element={<Tutor />} />
    </Routes>
  );
};

export default AppRouter;
