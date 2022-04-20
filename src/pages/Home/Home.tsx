import React from "react";
import { Loader } from "../../components/Loader/Loader";
import { HomeFunction, HomePhotos } from "./HomeTypes";
import { PhotoGroup } from "./PhotoGroup/PhotoGroup";

export const Home: HomeFunction = ({ photos }) => {
  if (!photos.length) {
    return <Loader />;
  }

  return (
    <div>
      {photos.map((element: Array<HomePhotos>, index: number) => {
        return <PhotoGroup element={element} key={element[index].id} index={index}/>;
      })}
    </div>
  );
};
