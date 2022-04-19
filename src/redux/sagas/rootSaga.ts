import { all, AllEffect, call, CallEffect } from "redux-saga/effects";
import { watchPhotosSaga } from "./photosSaga/photosSaga";

export function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield all([call(watchPhotosSaga)]);
}
