import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "types/game/game";

const initialState: IGameState = {
  topGames: [],
  searchedGames: [],
  games: [],
};

const gameSlice = createSlice({
  name: "GAMES",
  initialState,
  reducers: {
    closeAllModals: () => initialState,
    getTopGames: () => {},
    setTopGames: (state: IGameState, { payload }: PayloadAction<any>) => {
      state.topGames = payload;
    },
    getSearchedGames: (
      state: IGameState,
      { payload }: PayloadAction<string>
    ) => {},
    setSearchedGames: (state: IGameState, { payload }: PayloadAction<any>) => {
      state.searchedGames = payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
