import { HomePhotos } from "../../pages/Home/HomeTypes";

export type PhotosAPI = {
  getPhotos(): Promise<HomePhotos[]>;
};
