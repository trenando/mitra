import { PhotosActions } from "../../../actions/photosActions/types/PhotosActionsTypes";
import { StateType } from "../../../state/StateTypes";

export type PhotosReducer = (state: StateType, action: PhotosActions) => StateType;
