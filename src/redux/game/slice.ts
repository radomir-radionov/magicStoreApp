import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "./types";
import { IGame, INewGameData } from "types/game";
import { IGetFilteredGamesRequest } from "requests/types";

const initialState: IGameState = {
  topGames: [],
  games: [],
  searchedGames: [],
  filteredGames: [],
  loading: false,
};

const gameSlice = createSlice({
  name: "GAMES",
  initialState,
  reducers: {
    closeAllModals: () => initialState,
    getTopGames: () => {},
    setTopGames: (state: IGameState, { payload }: PayloadAction<IGame[]>) => {
      state.topGames = payload;
    },
    getSearchedGames: (
      state: IGameState,
      { payload }: PayloadAction<string>
    ) => {},
    setSearchedGames: (
      state: IGameState,
      { payload }: PayloadAction<IGame[]>
    ) => {
      state.searchedGames = payload;
    },
    getFilteredGames: (
      state: IGameState,
      { payload }: PayloadAction<IGetFilteredGamesRequest>
    ) => {},
    setFilteredGames: (
      state: IGameState,
      { payload }: PayloadAction<IGame[]>
    ) => {
      state.filteredGames = payload;
    },
    addNewGame: (
      state: IGameState,
      { payload }: PayloadAction<INewGameData>
    ) => {},
    setLoading: (state: IGameState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
