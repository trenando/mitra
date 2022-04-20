import React, { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { photoAC } from "../../redux/actions/photosActions/photoByIdAction";
import { unmountAC } from "../../redux/actions/photosActions/unmountPhotoActions";
import { Photo } from "./Photo"
import { ParamID, PhotoProps, PhotosState } from "./PhotoTypes";

export const PhotoContainer = () => {
    const photoId: ParamID = useParams();
    const photo = useSelector(({ photos }: PhotosState) => photos.photo)
    const dispatch = useDispatch()
    const memoizedPhoto = useCallback((photoId: ParamID) => {
        dispatch(photoAC(photoId))
    }, [dispatch])

    useEffect(() => {
        memoizedPhoto(photoId)
        return () => {
            dispatch(unmountAC())
        }
    }, [memoizedPhoto, photoId, dispatch])

    const photoProps: PhotoProps = useMemo(() => {
        return { ...photo }
    }, [photo])

    return <Photo {...photoProps} />
}
