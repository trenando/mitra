import React from "react";

export type HomePhotos = {
  albumId: number | null;
  id: number | null;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Photos = {
  photos: {
    photos: Array<Array<HomePhotos>>;
  };
};

type HomeProps = {
  photos: Array<Array<HomePhotos>>;
};

export type HomeFunction = React.FC<HomeProps>;
