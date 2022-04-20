import React from "react";

type PhotoCardProps = {
    albumId: number | null;
    id: number | null;
    title: string;
    url: string;
    thumbnailUrl: string;
}


export type PhotoCardFunc = React.FC<PhotoCardProps>