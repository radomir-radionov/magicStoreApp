import { IGame } from "./../../types/game/game";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getSearchedGamesRequest, getTopGamesRequest } from "requests";

import { gameActions } from "./slice";

export function* getTopGamesSaga() {
  try {
    const response: IGame[] = yield call(() => getTopGamesRequest());
    yield put(gameActions.setTopGames(response));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

export function* getSearchedGamesSaga({
  payload,
}: ReturnType<typeof gameActions.getSearchedGames>) {
  try {
    const response: IGame[] = yield call(() =>
      getSearchedGamesRequest(payload)
    );
    yield put(gameActions.setSearchedGames(response));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

function* gameSaga() {
  yield all([
    takeLatest(gameActions.getTopGames, getTopGamesSaga),
    takeLatest(gameActions.getSearchedGames, getSearchedGamesSaga),
  ]);
}

export default gameSaga;
