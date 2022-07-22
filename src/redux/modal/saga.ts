import { all, call, takeLatest } from "redux-saga/effects";

import { modalActionTypes } from "./slice";

// any type - just for example
function* exampleRequestSaga(): any {
  // const result = yield call(getExample);
}

function* modalSaga() {
  // yield all([takeLatest(modalActionTypes.exampleRequest, exampleRequestSaga)]);
}

export default modalSaga;
