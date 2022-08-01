import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  deleteGameCartRequest,
  getIsAuthRequest,
  postLogoutRequest,
  postSignInRequest,
  postSignUpRequest,
  putGameInCartRequest,
} from "requests";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { putNewUserDataRequest } from "requests/putNewUserDataRequest";
import { IAuthResponse } from "types/response";
import getUserCartGamesRequest from "requests/getUserCartGamesRequest";

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>) {
  const { email, password, name } = payload;
  try {
    const { data }: IAuthResponse = yield call(() =>
      postSignUpRequest(email, password, name)
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
      postSignInRequest(email, password)
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
    yield call(() => postLogoutRequest());
    localStorage.removeItem("token");
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({} as IUser));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* checkAuthSaga() {
  try {
    const { data }: IAuthResponse = yield call(() => getIsAuthRequest());
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
    yield call(() => putNewUserDataRequest(payload));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* getUserCartGames({
  payload,
}: ReturnType<typeof userActions.getUserCartGames>) {
  try {
    const { data } = yield call(() => getUserCartGamesRequest(payload));
    yield put(userActions.setUserCartGames(data));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* setGameInCartSaga({
  payload,
}: ReturnType<typeof userActions.setGameInCart>) {
  try {
    yield call(() => putGameInCartRequest(payload));
    yield put(userActions.setDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* removeGameInCartSaga({
  payload,
}: ReturnType<typeof userActions.removeGameInCart>): any {
  try {
    yield call(() => deleteGameCartRequest(payload));
    yield put(userActions.setDataChangedOnServer(true));
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
    takeLatest(userActions.getUserCartGames, getUserCartGames),
    takeLatest(userActions.removeGameInCart, removeGameInCartSaga),
    takeLatest(userActions.setGameInCart, setGameInCartSaga),
  ]);
}
