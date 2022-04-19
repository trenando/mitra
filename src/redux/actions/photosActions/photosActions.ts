import { PhotosAC, ReceivePhotosAC } from "./types/PhotosActionsTypes";

export const GET_PHOTOS = "GET_PHOTOS";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export const photosAC: PhotosAC = () => ({
  type: GET_PHOTOS,
});

export const receivePhotosAC: ReceivePhotosAC = (payload) => ({
  type: RECEIVE_PHOTOS,
  payload,
});
