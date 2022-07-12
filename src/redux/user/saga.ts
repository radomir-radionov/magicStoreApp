import { all } from "redux-saga/effects";

export function* signUpSaga({ payload }: any): any {
  const { email, name, password } = payload;
  // try {
  //   yield call(() => postSignUpDataRequest(email, name, password));
  //   const data = yield call(() => postSignInDataRequest(email, password));
  //   localStorage.setItem("user", JSON.stringify(data));
  // } catch (e) {
  //   yield put(setError("User is not authorized!!!"));
  // }
}

export default function* userSaga() {
  yield all([
    // takeLatest(setUser, signUpSaga),
  ]);
}
