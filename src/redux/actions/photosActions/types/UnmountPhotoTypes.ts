import { ActionFunction } from "../../../GlobalReduxTypes"
import { UNMOUNT } from "../unmountPhotoActions"

export type UnmountAction = {
    type: typeof UNMOUNT
}

export type UnmountAC = ActionFunction<UnmountAction>