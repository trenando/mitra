import { HomePhotos } from "../../pages/Home/HomeTypes";

export type StateType = {
  photos: Array<Array<HomePhotos>>;
  photo: HomePhotos | null
};
