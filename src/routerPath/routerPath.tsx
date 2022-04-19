import { About } from "../pages/About/About";
import { HomeContainer } from "../pages/Home/HomeContainer";
import { NotFound } from "../pages/NotFound/NotFound";
import { Photo } from "../pages/Photo/Photo";
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
    path: "/photo",
    link: "/photo",
    element: <Photo />,
  },
  pageNotFound: {
    path: "*",
    element: <NotFound />,
  },
};
