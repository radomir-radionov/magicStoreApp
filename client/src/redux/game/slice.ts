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
      const { data } = payload;
      state.gamesApi = data.results;
    },
    getTopGames: () => {},
    setTopGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.topGames = payload;
    },
    getSearchedGames: (state, { payload }: PayloadAction<string>) => {},
    setSearchedGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.searchedGames = payload;
    },
    getFilteredGames: (
      state,
      { payload }: PayloadAction<IFilteredGamesParams>
    ) => {},
    setFilteredGames: (state, { payload }: PayloadAction<IGame[]>) => {
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
