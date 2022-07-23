import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const user = (state: RootState) => state.user;

export const currentUserDataSelector = createSelector(
  user,
  (state) => state.userData
);

export const isAuthSelector = createSelector(user, (state) => state.isAuth);

export const userNameSelector = createSelector(
  user,
  (state) => state.userData.name
);
