interface OtherRoute {
  path: string;
  element: JSX.Element;
}

interface Route extends OtherRoute {
  link: string;
  name?: string;
}

export type Routes = {
  home: Route;
  about: Route;
  photo: Route;
  pageNotFound: OtherRoute;
};
