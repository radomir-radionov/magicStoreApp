import { all, call, put, takeLatest } from "redux-saga/effects";
import getTopGamesRequest from "requests/getTopGamesRequest";
import { gameActions } from "./slice";

export function* getTopGamesSaga(): Generator<any> {
  try {
    const response = yield call(() => getTopGamesRequest());
    yield put(gameActions.setTopGames(response));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

function* gameSaga() {
  yield all([takeLatest(gameActions.getTopGames, getTopGamesSaga)]);
}

export default gameSaga;
