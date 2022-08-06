import { all, call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "redux/user";
import {
  deleteGameCart,
  getUserCartGames,
  putGameInCart,
  putNewDataCart,
} from "requests";
import { cartActions } from "./slice";

export function* getUserCartGamesSaga({
  payload,
}: ReturnType<typeof cartActions.getUserCartGames>) {
  try {
    const { data } = yield call(() => getUserCartGames(payload));
    yield put(cartActions.setUserCartGames(data));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* setGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.setGameInCart>) {
  try {
    yield call(() => putGameInCart(payload));
    yield put(userActions.setDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* removeGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.removeGameInCart>) {
  try {
    yield call(() => deleteGameCart(payload));
    yield put(userActions.setDataChangedOnServer(true));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* updateCartDataSaga({
  payload,
}: ReturnType<typeof cartActions.updateCartData>) {
  try {
    yield call(() => putNewDataCart(payload));
    yield put(userActions.setDataChangedOnServer(true));
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
