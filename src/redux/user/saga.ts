import { all, call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { IAuthResponse } from "types/response";
import { userService } from "services";

export function* checkAuthSaga() {
  try {
    const { data }: IAuthResponse = yield call(() => userService.isAuth());
    localStorage.setItem("token", data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(data.user));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>) {
  try {
    const { data }: IAuthResponse = yield call(() =>
      userService.signUp(payload)
    );
    localStorage.setItem("token", data.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(data.user));
  } catch (e) {
    yield put(userActions.setError("User is not authorized!!!"));
  }
}

export function* loginSaga({ payload }: ReturnType<typeof userActions.login>) {
  try {
    const { data }: IAuthResponse = yield call(() =>
      userService.signIn(payload)
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
    yield call(() => userService.logout());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IUser));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* changeUserDataSaga({
  payload,
}: ReturnType<typeof userActions.changeUserData>) {
  try {
    console.log("changeUserDataSaga", 1);
    yield call(() => userService.updateUserData(payload));
    yield put(userActions.isDataChangedOnServer(true));
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
