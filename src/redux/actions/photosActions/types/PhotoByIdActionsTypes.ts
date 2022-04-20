import { HomePhotos } from "../../../../pages/Home/HomeTypes"
import { ParamID } from "../../../../pages/Photo/PhotoTypes"
import { PayloadActionFunction } from "../../../GlobalReduxTypes"
import { GET_PHOTO_BY_ID, RECEIVE_PHOTO_BY_ID } from "../photoByIdAction"

export type PhotoByIdAction = {
    type: typeof GET_PHOTO_BY_ID,
    payload: ParamID
}

export type ReceivePhotoByIdAction = {
    type: typeof RECEIVE_PHOTO_BY_ID,
    payload: HomePhotos
}

export type PhotoAC = PayloadActionFunction<PhotoByIdAction, ParamID>

export type ReceivePhotoByIdAC = PayloadActionFunction<ReceivePhotoByIdAction, HomePhotos>