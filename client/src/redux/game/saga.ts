import { gameActions } from "redux/game";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { gameService } from "services";
import { IGame } from "types/game";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getGamesApi(): any {
  try {
    const resp = yield call(() => gameService.getGamesApi());
    yield put(gameActions.setGamesApi(resp.results));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getGameData(payload: any): any {
  try {
    yield put(gameActions.setLoading(true));
    const resp = yield call(() => gameService.getGameData(payload));
    yield put(gameActions.setGameData(resp));
    yield put(gameActions.setLoading(false));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getTopGamesSaga() {
  try {
    const response: IGame[] = yield call(() => gameService.getTopGames());
    yield put(gameActions.setTopGames(response));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

export function* getFilteredGamesSaga(payload: any) {
  try {
    yield put(gameActions.setLoading(true));
    const resp: ResponseGenerator = yield call(() =>
      gameService.getFilteredGames(payload)
    );
    yield put(gameActions.setFilteredGames(resp.data));
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
    yield put(gameActions.setLoading(true));
    yield call(() => gameService.addNewGame(payload));
    yield put(gameActions.setLoading(false));
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

export function* editGameSaga({
  payload,
}: ReturnType<typeof gameActions.editGame>) {
  try {
    const { data } = yield call(() => gameService.editGame(payload));
    const { message } = data;
    toast.success(message);
  } catch (e) {
    // yield put(gameActions.setLoading(false));
    // console.log(e.response?.data?.message);
  }
}

function* gameSaga() {
  yield all([
    takeLatest(gameActions.getGamesApi, getGamesApi),
    takeLatest(gameActions.getGameData, getGameData),
    takeLatest(gameActions.getTopGames, getTopGamesSaga),
    takeLatest(gameActions.getFilteredGames, getFilteredGamesSaga),
    takeLatest(gameActions.addNewGame, addNewGameSaga),
    takeLatest(gameActions.editGame, editGameSaga),
  ]);
}

export default gameSaga;
