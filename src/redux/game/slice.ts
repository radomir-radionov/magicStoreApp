import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitalState {
  games: any;
}

const initialState: IInitalState = {
  games: [],
};

const gameSlice = createSlice({
  name: "GAMES",
  initialState,
  reducers: {
    closeAllModals: () => initialState,
  },
});

export const gameActionTypes = gameSlice.actions;

export default gameSlice.reducer;
