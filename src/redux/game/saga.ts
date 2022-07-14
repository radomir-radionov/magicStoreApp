import { all, call, takeLatest } from "redux-saga/effects";
import { getExample } from "requests";

// any type - just for example
function* exampleRequestSaga(): any {
  const result = yield call(getExample);

  console.log(result);
}

function* gameSaga() {
  // yield all([takeLatest(modalActionTypes.exampleRequest, exampleRequestSaga)]);
}

export default gameSaga;
