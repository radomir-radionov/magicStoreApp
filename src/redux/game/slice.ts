import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "./types";
import { IGame, INewGameData } from "types/game";
import { IGetFilteredGames } from "requests/types";

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
    setTopGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.topGames = payload;
    },
    getSearchedGames: (state, { payload }: PayloadAction<string>) => {},
    setSearchedGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.searchedGames = payload;
    },
    getFilteredGames: (
      state,
      { payload }: PayloadAction<IGetFilteredGames>
    ) => {},
    setFilteredGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.filteredGames = payload;
    },
    addNewGame: (state, { payload }: PayloadAction<INewGameData>) => {},
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
