import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameState } from "types/game/game";

const initialState: IGameState = {
  topGames: [],
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
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
