import { all, call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "redux/user";

import { cartService } from "services";
import { cartActions } from "./slice";

export function* getUserCartGamesSaga({
  payload,
}: ReturnType<typeof cartActions.getUserCartGames>) {
  try {
    const { data } = yield call(() => cartService.getUserCartGames(payload));
    yield put(cartActions.setUserCartGames(data));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* setGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.setGameInCart>) {
  try {
    yield call(() => cartService.putGameInCart(payload));
    yield put(userActions.isDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* removeGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.removeGameInCart>) {
  try {
    yield call(() => cartService.deleteGameCart(payload));
    yield put(userActions.isDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* updateCartDataSaga({
  payload,
}: ReturnType<typeof cartActions.updateCartData>) {
  try {
    yield call(() => cartService.putNewDataCart(payload));
    yield put(userActions.isDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(cartActions.getUserCartGames, getUserCartGamesSaga),
    takeLatest(cartActions.removeGameInCart, removeGameInCartSaga),
    takeLatest(cartActions.setGameInCart, setGameInCartSaga),
    takeLatest(cartActions.updateCartData, updateCartDataSaga),
  ]);
}
