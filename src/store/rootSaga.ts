import { all, fork } from "redux-saga/effects";
import { userSaga } from "redux/user";
import { modalSaga } from "redux/modal";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(modalSaga)]);
}
