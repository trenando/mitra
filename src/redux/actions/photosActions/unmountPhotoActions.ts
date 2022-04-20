import { UnmountAC } from "./types/UnmountPhotoTypes";

export const UNMOUNT = "UNMOUNT";

export const unmountAC: UnmountAC = () => ({
    type: UNMOUNT
})