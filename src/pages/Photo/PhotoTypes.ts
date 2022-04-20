import React from "react";
import { Params } from "react-router-dom";
import { HomePhotos } from "../Home/HomeTypes";

export type ParamID = Readonly<Params<string>>;

export type PhotosState = {
    photos: {
        photo: HomePhotos
    }
}

export type PhotoProps = {
    albumId: number | null;
    id: number | null;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type PhotoFunc = React.FC<PhotoProps>