import { axiosInstance } from "./instance";
import { PhotosAPI } from "./types/PhotosApiTypes";

const instance = axiosInstance("/");

export const photosAPI: PhotosAPI = {
  async getPhotos() {
    const res = await instance.get("photos");
    return res.data;
  },
};
