import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "types/game";
import {
  IGetUserCartGames,
  ICartState,
  IPutGameInCartData,
  INewCartData,
  IDeleteGameCartData,
} from "./types";

const initialState: ICartState = {
  cart: [] as IGame[],
  isLoading: true,
  error: {
    isError: false,
    status: null,
  },
};

export const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    getUserCartGames: (state, { payload }: PayloadAction<any>) => {},
    setUserCartGames: (state, { payload }: PayloadAction<IGame[]>) => {
      state.cart = payload;
    },
    setGameInCart: (
      state,
      { payload }: PayloadAction<IPutGameInCartData>
    ) => {},
    removeGameInCart: (
      state,
      { payload }: PayloadAction<IDeleteGameCartData>
    ) => {},
    buyCartGames: (state, { payload }: PayloadAction<INewCartData>) => {},
    setError: (state, { payload }: PayloadAction<string>) => {
      // state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
