import { axiosInstance } from "./instance";
import { PhotosAPI } from "./types/PhotosApiTypes";

const instance = axiosInstance("/");

export const photosAPI: PhotosAPI = {
  async getPhotos() {
    const res = await instance.get("photos?_limit=24");
    return res.data;
  },
  async getPhotoById({ id }) {
    const res = await instance.get(`photos/${id}`)
    return res.data;
  }
};
