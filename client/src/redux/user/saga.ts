import { all, call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { userService } from "services";
import { toast } from "react-toastify";

export function* checkAuthSaga(): any {
  try {
    const { data }: any = yield call(() => userService.isAuth());
    const { accessToken, userData } = data;
    localStorage.setItem("token", accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(userData));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>): any {
  try {
    const { data }: any = yield call(() => userService.signUp(payload));
    const { userData, message } = data;
    localStorage.setItem("token", userData.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(userData.user));
    toast.success(message);
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.data.message);
  }
}

export function* loginSaga({
  payload,
}: ReturnType<typeof userActions.login>): any {
  try {
    const { data }: any = yield call(() => userService.signIn(payload));
    const { userData } = data;
    localStorage.setItem("token", userData.accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(userData.user));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* logoutSaga() {
  try {
    yield call(() => userService.logout());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IUser));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* setUserImgSaga({
  payload,
}: ReturnType<typeof userActions.setUserImg>) {
  try {
    yield call(() => userService.setUserImg(payload));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* changeUserDataSaga({
  payload,
}: ReturnType<typeof userActions.changeUserData>): any {
  try {
    yield call(() => userService.updateUserData(payload));

    console.log("changeUserDataSaga", 1);
    yield put(userActions.isDataChangedOnServer(true));
    // toast.success("Data changed");
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userActions.registration, registrationSaga),
    takeLatest(userActions.login, loginSaga),
    takeLatest(userActions.logout, logoutSaga),
    takeLatest(userActions.getUserData, checkAuthSaga),
    takeLatest(userActions.changeUserData, changeUserDataSaga),
    takeLatest(userActions.setUserImg, setUserImgSaga),
  ]);
}
