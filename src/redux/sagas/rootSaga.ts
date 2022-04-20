import { all, AllEffect, call, CallEffect } from "redux-saga/effects";
import { watchPhotoSaga } from "./photosSaga/photoByIdSaga";
import { watchPhotosSaga } from "./photosSaga/photosSaga";

export function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield all(
    [call(watchPhotosSaga),
    call(watchPhotoSaga)
    ]);
}
