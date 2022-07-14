import { all, call, put, takeLatest } from "redux-saga/effects";
import { postSignUpRequest } from "requests";
import { userActions } from "./slice";

export function* signUpSaga({
  payload,
}: ReturnType<typeof userActions.setUser>) {
  const { email, name, password } = payload;
  try {
    yield call(() => postSignUpRequest(email, name, password));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}
export default function* userSaga() {
  yield all([takeLatest(userActions.setUser, signUpSaga)]);
}
