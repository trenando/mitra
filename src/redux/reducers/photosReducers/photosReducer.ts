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
    default: {
      return state;
    }
  }
};
