import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { photosAC } from "../../redux/actions/photosActions/photosActions";
import { Home } from "./Home";
import { Photos } from "./HomeTypes";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector(({ photos }: Photos) => photos.photos);
  const memoizedPhotos = useCallback(() => {
    dispatch(photosAC());
  }, [dispatch]);

  useEffect(() => {
    memoizedPhotos();
  }, [memoizedPhotos]);

  const memoizedHomeProps = useMemo(() => {
    return photos;
  }, [photos]);

  return <Home photos={memoizedHomeProps} />;
};
