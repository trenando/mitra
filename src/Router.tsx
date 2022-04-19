import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "./routerPath/routerPath";

export const Router = () => {
  return (
    <Routes>
      <Route path={route.home.path} element={route.home.element} />
      <Route path={route.about.path} element={route.about.element} />
      <Route path={route.photo.path} element={route.photo.element} />
      <Route path={route.pageNotFound.path} element={route.pageNotFound.element} />
    </Routes>
  );
};
