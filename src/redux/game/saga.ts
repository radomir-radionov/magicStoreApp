import { IGame } from "./../../types/game/game";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getFilteredGamesRequest,
  getSearchedGamesRequest,
  getTopGamesRequest,
  putGameInCartRequest,
  deleteGameCartRequest,
} from "requests";
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
    yield put(gameActions.setLoading(true));
    const response: IGame[] = yield call(() =>
      getSearchedGamesRequest(payload)
    );
    yield put(gameActions.setSearchedGames(response));
    yield put(gameActions.setLoading(false));
  } catch (e) {
    yield put(gameActions.setLoading(false));
    // console.log(e.response?.data?.message);
  }
}

export function* getFilteredGamesSaga({
  payload,
}: ReturnType<typeof gameActions.getFilteredGames>) {
  try {
    yield put(gameActions.setLoading(true));
    const response: IGame[] = yield call(() =>
      getFilteredGamesRequest(payload)
    );
    yield put(gameActions.setFilteredGames(response));
    yield put(gameActions.setLoading(false));
  } catch (e) {
    yield put(gameActions.setLoading(false));
    // console.log(e.response?.data?.message);
  }
}

export function* setGameInCartSaga({
  payload,
}: ReturnType<typeof gameActions.setGameInCart>) {
  try {
    yield call(() => putGameInCartRequest(payload));
    // yield put(gameActions.setFilteredGames(response));
  } catch (e) {
    // console.log(e.response?.data?.message);
  }
}

function* gameSaga() {
  yield all([
    takeLatest(gameActions.getTopGames, getTopGamesSaga),
    takeLatest(gameActions.getSearchedGames, getSearchedGamesSaga),
    takeLatest(gameActions.getFilteredGames, getFilteredGamesSaga),
    takeLatest(gameActions.setGameInCart, setGameInCartSaga),
  ]);
}

export default gameSaga;
