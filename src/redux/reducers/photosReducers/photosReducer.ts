import { RECEIVE_PHOTO_BY_ID } from "../../actions/photosActions/photoByIdAction";
import { RECEIVE_PHOTOS } from "../../actions/photosActions/photosActions";
import { initialState } from "../../state/initialState";
import { PhotosReducer } from "./types/PhotosReducerTypes";

export const photosReducer: PhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    case RECEIVE_PHOTO_BY_ID: {
      return {
        ...state,
        photo: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
