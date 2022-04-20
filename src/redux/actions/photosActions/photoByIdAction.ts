import { PhotoAC, ReceivePhotoByIdAC } from "./types/PhotoByIdActionsTypes";

export const GET_PHOTO_BY_ID = "GET_PHOTO_BY_ID";
export const RECEIVE_PHOTO_BY_ID = "RECEIVE_PHOTO_BY_ID";

export const photoAC: PhotoAC = (payload) => ({
    type: GET_PHOTO_BY_ID,
    payload
})

export const receivePhotoByIdAC: ReceivePhotoByIdAC = (payload) => ({
    type: RECEIVE_PHOTO_BY_ID,
    payload
})