import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { gameService } from "services";
import { IGame } from "types/game";
import { gameActions } from "./slice";

export function* getTopGamesSaga() {
  try {
    const response: IGame[] = yield call(() => gameService.getTopGames());
    yield put(gameActions.setTopGames(response));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getSearchedGamesSaga({
  payload,
}: ReturnType<typeof gameActions.getSearchedGames>) {
  try {
    yield put(gameActions.setLoading(true));
    const response: IGame[] = yield call(() =>
      gameService.getSearchedGames(payload)
    );
    yield put(gameActions.setSearchedGames(response));
    yield put(gameActions.setLoading(false));
  } catch (e: any) {
    yield put(gameActions.setLoading(false));
    toast.error(e.response.data.message);
  }
}

export function* getFilteredGamesSaga({
  payload,
}: ReturnType<typeof gameActions.getFilteredGames>) {
  try {
    yield put(gameActions.setLoading(true));
    const response: IGame[] = yield call(() =>
      gameService.getFilteredGames(payload)
    );
    yield put(gameActions.setFilteredGames(response));
    yield put(gameActions.setLoading(false));
  } catch (e: any) {
    yield put(gameActions.setLoading(false));
    toast.error(e.response.data.message);
  }
}

export function* addNewGameSaga({
  payload,
}: ReturnType<typeof gameActions.addNewGame>) {
  try {
    yield call(() => gameService.addNewGame(payload));
    // yield put(gameActions.setLoading(true));
    // const response: IGame[] = yield call(() =>
    //   getFilteredGamesRequest(payload)
    // );
    // yield put(gameActions.setFilteredGames(response));
    // yield put(gameActions.setLoading(false));
  } catch (e) {
    // yield put(gameActions.setLoading(false));
    // console.log(e.response?.data?.message);
  }
}

function* gameSaga() {
  yield all([
    takeLatest(gameActions.getTopGames, getTopGamesSaga),
    takeLatest(gameActions.getSearchedGames, getSearchedGamesSaga),
    takeLatest(gameActions.getFilteredGames, getFilteredGamesSaga),
    takeLatest(gameActions.addNewGame, addNewGameSaga),
  ]);
}

export default gameSaga;
