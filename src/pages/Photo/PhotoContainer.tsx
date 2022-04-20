import React from "react"
import { useParams } from "react-router-dom"
import { Photo } from "./Photo"

export const PhotoContainer = () => {
    const photoId = useParams();
    return <Photo />
}
