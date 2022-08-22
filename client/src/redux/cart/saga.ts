import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { userActions } from "redux/user";
import { cartService } from "services";
import { cartActions } from "./slice";

export function* getUserCartGamesSaga({
  payload,
}: ReturnType<typeof cartActions.getUserCartGames>): any {
  try {
    const res: any = yield call(() => cartService.getUserCartGames(payload));
    yield put(cartActions.setUserCartGames(res.data));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* setGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.setGameInCart>) {
  try {
    const { data } = yield call(() => cartService.putGameInCart(payload));
    const { isDataChanged, message } = data;
    yield put(userActions.isDataChangedOnServer(isDataChanged));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* removeGameInCartSaga({
  payload,
}: ReturnType<typeof cartActions.removeGameInCart>) {
  try {
    const { data } = yield call(() => cartService.deleteGameCart(payload));
    const { isDataChanged, message } = data;
    yield put(userActions.isDataChangedOnServer(isDataChanged));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* buyCartGamesSaga({
  payload,
}: ReturnType<typeof cartActions.buyCartGames>) {
  try {
    const { data } = yield call(() => cartService.putNewDataCart(payload));
    const { isCartDataChanged, message } = data;
    yield put(userActions.isDataChangedOnServer(isCartDataChanged));
    toast.success(message);
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(cartActions.getUserCartGames, getUserCartGamesSaga),
    takeLatest(cartActions.removeGameInCart, removeGameInCartSaga),
    takeLatest(cartActions.setGameInCart, setGameInCartSaga),
    takeLatest(cartActions.buyCartGames, buyCartGamesSaga),
  ]);
}
