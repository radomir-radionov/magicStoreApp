import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  postLogoutRequest,
  postSignInRequest,
  postSignUpRequest,
} from "requests";
import { userActions } from "./slice";
import { IAuthResponse } from "types/response";

export function* signUpSaga({
  payload,
}: ReturnType<typeof userActions.registration>): Generator<any> {
  const { email, password, name } = payload;
  try {
    const response: any = yield call(() =>
      postSignUpRequest(email, password, name)
    );
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(response.data));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* signInSaga({
  payload,
}: ReturnType<typeof userActions.login>): Generator<any> {
  const { email, password } = payload;
  try {
    const response: any = yield call(() => postSignInRequest(email, password));
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(response.data));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* logoutSaga(): Generator<any> {
  try {
    yield call(() => postLogoutRequest());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IAuthResponse));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userActions.registration, signUpSaga),
    takeLatest(userActions.login, signInSaga),
    takeLatest(userActions.logout, logoutSaga),
  ]);
}
