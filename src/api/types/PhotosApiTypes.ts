type photosResponce = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosAPI = {
  getPhotos(): Promise<photosResponce[]>;
};
