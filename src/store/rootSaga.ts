import { all, fork } from "redux-saga/effects";
import { userSaga } from "redux/user";
import { modalSaga } from "redux/modal";
import { gameSaga } from "redux/game";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(gameSaga), fork(modalSaga)]);
}
