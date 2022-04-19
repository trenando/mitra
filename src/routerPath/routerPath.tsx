import { About } from "../pages/About/About";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Photo } from "../pages/Photo/Photo";
import { Routes } from "./RouterTypes";

export const route: Routes = {
  home: {
    path: "/",
    link: "/",
    name: "Главная",
    element: <Home />,
  },
  about: {
    path: "/about",
    link: "/about",
    name: "Обо мне",
    element: <About />,
  },
  photo: {
    path: "/photo",
    link: "/photo",
    name: "Фото",
    element: <Photo />,
  },
  pageNotFound: {
    path: "*",
    element: <NotFound />,
  },
};
