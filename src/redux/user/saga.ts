import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  checkAuthRequest,
  postLogoutRequest,
  postSignInRequest,
  postSignUpRequest,
} from "requests";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { putNewUserDataRequest } from "requests/putNewUserDataRequest";

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>): Generator<any> {
  const { email, password, name } = payload;
  try {
    const response: any = yield call(() =>
      postSignUpRequest(email, password, name)
    );
    localStorage.setItem("token", response.data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(response.data.user));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* loginSaga({
  payload,
}: ReturnType<typeof userActions.login>): Generator<any> {
  const { email, password } = payload;
  try {
    const response: any = yield call(() => postSignInRequest(email, password));
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(response.data.user));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* logoutSaga(): Generator<any> {
  try {
    yield call(() => postLogoutRequest());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IUser));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* checkAuthSaga(): Generator<any> {
  try {
    const response: any = yield call(() => checkAuthRequest());
    localStorage.setItem("token", response.data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(response.data.user));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* changeUserDataSaga({
  payload,
}: ReturnType<typeof userActions.changeUserData>): Generator<any> {
  try {
    yield call(() => putNewUserDataRequest(payload));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userActions.registration, registrationSaga),
    takeLatest(userActions.login, loginSaga),
    takeLatest(userActions.logout, logoutSaga),
    takeLatest(userActions.checkAuth, checkAuthSaga),
    takeLatest(userActions.changeUserData, changeUserDataSaga),
  ]);
}
