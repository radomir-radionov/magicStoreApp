import { IGame } from "./../../types/game/game";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "types/game/game";
import { ISetGameInCartPayload } from "./types";

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
    getFilteredGames: (state: IGameState, { payload }: any) => {},
    setFilteredGames: (
      state: IGameState,
      { payload }: PayloadAction<IGame[]>
    ) => {
      state.filteredGames = payload;
    },
    setGameInCart: (
      state: IGameState,
      { payload }: PayloadAction<ISetGameInCartPayload>
    ) => {},

    setLoading: (state: IGameState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
