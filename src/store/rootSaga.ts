import { all, fork } from "redux-saga/effects";
import { userSaga } from "redux/user";
import { cartSaga } from "redux/cart";
import { gameSaga } from "redux/game";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(cartSaga), fork(gameSaga)]);
}
