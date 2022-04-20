import { About } from "../pages/About/About";
import { HomeContainer } from "../pages/Home/HomeContainer";
import { NotFound } from "../pages/NotFound/NotFound";
import { PhotoContainer } from "../pages/Photo/PhotoContainer";
import { Routes } from "./RouterTypes";

export const route: Routes = {
  home: {
    path: "/",
    link: "/",
    name: "Галерея",
    element: <HomeContainer />,
  },
  about: {
    path: "/about",
    link: "/about",
    name: "Обо мне",
    element: <About />,
  },
  photo: {
    path: "/photo/:id",
    link: "/photo",
    name: "Подробнее",
    element: <PhotoContainer />,
  },
  pageNotFound: {
    path: "*",
    element: <NotFound />,
  },
};
