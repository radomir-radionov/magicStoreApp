import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import { userActions } from "./slice";
import { IUser } from "types/user";
import { userService } from "services";
import { toast } from "react-toastify";
import { ResponseGenerator } from "redux/game/saga";
import user from "./selectors";

export function* checkAuthSaga() {
  try {
    const { data } = yield call(() => userService.isAuth());
    const { accessToken, userData } = data;
    localStorage.setItem("token", accessToken);
    yield put(userActions.setUserId(userData.id));
    yield put(userActions.setAuth(true));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* registrationSaga({
  payload,
}: ReturnType<typeof userActions.registration>): any {
  try {
    const { data } = yield call(() => userService.signUp(payload));
    const { userData, message } = data;
    localStorage.setItem("token", userData.accessToken);
    const resp = yield call(() =>
      userService.getUserData(data.userData.user.id)
    );
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(resp.data));
    toast.success(message);
  } catch (e: any) {
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
    const resp = yield call(() =>
      userService.getUserData(data.userData.user.id)
    );
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(resp.data));
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

export function* updateUserDataSaga({
  payload,
}: ReturnType<typeof userActions.changeUserData>) {
  try {
    const { data } = yield call(() => userService.updateUserData(payload));
    const { message } = data;
    yield put(userActions.isDataChangedOnServer(true));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getUserDataSaga({
  payload,
}: ReturnType<typeof userActions.getUserData>) {
  try {
    const { data } = yield call(() => userService.getUserData(payload));
    yield put(userActions.setUser(data));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getUserCartSaga() {
  try {
    const userId: string = yield select(user.id);
    const { data } = yield call(() => userService.getUserCart(userId));
    yield put(userActions.setGamesToCart(data));
    // toast.success(message);
  } catch (e: any) {
    // toast.error(e.response.data.message);
  }
}

export function* setGameToCartSaga({
  payload,
}: ReturnType<typeof userActions.setGameToCart>) {
  try {
    const userId: string = yield select(user.id);
    const gameId = payload;
    const data = { userId, gameId };
    const { isDataChanged, message } = yield call(() =>
      userService.setGameInCart(data)
    );
    yield put(userActions.isDataChangedOnServer(isDataChanged));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* removeGameInCartSaga({
  payload,
}: ReturnType<typeof userActions.removeGameInCart>) {
  try {
    const { data } = yield call(() => userService.deleteGameCart(payload));
    const { isDataChanged, message } = data;
    yield put(userActions.isDataChangedOnServer(isDataChanged));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* buyCartGamesSaga({
  payload,
}: ReturnType<typeof userActions.buyCartGames>) {
  try {
    // const { data } = yield call(() => userService.putNewDataCart(payload));
    // const { isCartDataChanged, message } = data;
    // yield put(userActions.isDataChangedOnServer(isCartDataChanged));
    // toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userActions.registration, registrationSaga),
    takeLatest(userActions.login, loginSaga),
    takeLatest(userActions.logout, logoutSaga),
    takeLatest(userActions.checkAuth, checkAuthSaga),
    takeLatest(userActions.getUserData, getUserDataSaga),
    takeLatest(userActions.changeUserData, updateUserDataSaga),
    takeLatest(userActions.getUserCart, getUserCartSaga),
    takeLatest(userActions.removeGameInCart, removeGameInCartSaga),
    takeLatest(userActions.setGameToCart, setGameToCartSaga),
    takeLatest(userActions.buyCartGames, buyCartGamesSaga),
  ]);
}
