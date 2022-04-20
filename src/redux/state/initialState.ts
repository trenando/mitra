import { StateType } from "./StateTypes";

export const initialState: StateType = {
  photos: [],
  photo: {
    albumId: null,
    id: null,
    title: "",
    url: "",
    thumbnailUrl: "",
  }
};