import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getIsAuth,
  postLogout,
  postSignIn,
  postSignUp,
  putNewUserData,
} from "requests";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { IAuthResponse } from "types/response";

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>) {
  const { email, password, name } = payload;
  try {
    const { data }: IAuthResponse = yield call(() =>
      postSignUp(email, password, name)
    );
    localStorage.setItem("token", data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(data.user));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* loginSaga({ payload }: ReturnType<typeof userActions.login>) {
  const { email, password } = payload;
  try {
    const { data }: IAuthResponse = yield call(() =>
      postSignIn(email, password)
    );
    localStorage.setItem("token", data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(data.user));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* logoutSaga() {
  try {
    yield call(() => postLogout());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IUser));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* checkAuthSaga() {
  try {
    const { data }: IAuthResponse = yield call(() => getIsAuth());
    localStorage.setItem("token", data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(data.user));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* changeUserDataSaga({
  payload,
}: ReturnType<typeof userActions.changeUserData>) {
  try {
    yield call(() => putNewUserData(payload));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userActions.registration, registrationSaga),
    takeLatest(userActions.login, loginSaga),
    takeLatest(userActions.logout, logoutSaga),
    takeLatest(userActions.getUserData, checkAuthSaga),
    takeLatest(userActions.changeUserData, changeUserDataSaga),
  ]);
}
