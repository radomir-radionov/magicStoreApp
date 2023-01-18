import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "./types";
import {
  IEditGameData,
  IFilteredGamesParams,
  IGame,
  INewGameData,
} from "types/game";

const initialState: IGameState = {
  games: [],
  gamesApi: [],
  gameInfo: {},
  topGames: [],
  searchedGames: [],
  filteredGames: [],
  loading: false,
};

const gameSlice = createSlice({
  name: "GAMES",
  initialState,
  reducers: {
    getGamesApi: () => {},
    setGamesApi: (state, { payload }: any) => {
      state.gamesApi = payload;
    },
    getGameData: (state, { payload }: any) => {},
    setGameData: (state, { payload }: any) => {
      state.gameInfo = payload;
    },
    getTopGames: () => {},
    setTopGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.topGames = payload;
    },
    getFilteredGames: (state, payload) => {},
    setFilteredGames: (state, { payload }: any) => {
      state.filteredGames = payload;
    },
    addNewGame: (state, { payload }: PayloadAction<INewGameData>) => {},
    editGame: (state, { payload }: PayloadAction<IEditGameData>) => {},
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
