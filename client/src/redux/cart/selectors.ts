import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const cart = (state: RootState) => state.cart;

export const cartGamesSelector = createSelector(cart, (state) => state.cart);
