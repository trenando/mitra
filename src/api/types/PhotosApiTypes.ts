import { HomePhotos } from "../../pages/Home/HomeTypes";
import { ParamID } from "../../pages/Photo/PhotoTypes";

export type PhotosAPI = {
  getPhotos(): Promise<HomePhotos[]>;
  getPhotoById(id: ParamID): Promise<HomePhotos>;
};
