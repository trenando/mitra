import { HomePhotos } from "../../../../pages/Home/HomeTypes";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { GET_PHOTOS, RECEIVE_PHOTOS } from "../photosActions";

export type PhotosAction = {
  type: typeof GET_PHOTOS;
};
export type ReceivePhotosAction = {
  type: typeof RECEIVE_PHOTOS;
  payload: Array<Array<HomePhotos>>;
};

export type ReceivePhotosAC = PayloadActionFunction<ReceivePhotosAction, Array<Array<HomePhotos>>>;

export type PhotosAC = ActionFunction<PhotosAction>;
