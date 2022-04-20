import React, { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { photoAC } from "../../redux/actions/photosActions/photoByIdAction";
import { Photo } from "./Photo"
import { ParamID } from "./PhotoTypes";

export const PhotoContainer = () => {
    const photoId: ParamID = useParams();
    const dispatch = useDispatch()
    const memoizedPhoto = useCallback((photoId: ParamID) => {
        dispatch(photoAC(photoId))
    }, [dispatch])

    useEffect(() => {
        memoizedPhoto(photoId)
    }, [memoizedPhoto, photoId])

    return <Photo />
}
