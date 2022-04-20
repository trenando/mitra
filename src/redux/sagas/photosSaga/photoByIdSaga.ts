import { call, delay, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { photosAPI } from "../../../api/photosApi";
import { GET_PHOTO_BY_ID, receivePhotoByIdAC } from "../../actions/photosActions/photoByIdAction";
import { PhotoByIdAction } from "../../actions/photosActions/types/PhotoByIdActionsTypes";



export function* watchPhotoSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(GET_PHOTO_BY_ID, photoSaga);
}

export function* photoSaga(action: PhotoByIdAction):any {
    yield delay(500);
    const data = yield call(photosAPI.getPhotoById, action.payload)
    yield put(receivePhotoByIdAC(data));
}