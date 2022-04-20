import { photosAPI } from "../../../api/photosApi";
import { call, takeEvery, put, ForkEffect } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { GET_PHOTOS, receivePhotosAC } from "../../actions/photosActions/photosActions";
import { createSubArray } from "../../../helpers/createSubArray";

export function* watchPhotosSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(GET_PHOTOS, photosSaga);
}

export function* photosSaga():any {
  yield delay(500);
  let data = yield call(photosAPI.getPhotos);
  data = createSubArray(data, 6);
  yield put(receivePhotosAC(data));
}
