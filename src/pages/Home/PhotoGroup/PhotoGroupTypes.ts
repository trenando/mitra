import React from "react";
import { HomePhotos } from "../HomeTypes";

type PhotoGroupProps = {
  element: Array<HomePhotos>;
  index: number;
};

export type PhotoGroupFunc = React.FC<PhotoGroupProps>;
