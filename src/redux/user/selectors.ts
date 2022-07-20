import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const user = (state: RootState) => state.user;

export const getCurrentUserDataSelector = createSelector(
  user,
  (state) => state.userData
);

export const getIsAuthSelector = createSelector(user, (state) => state.isAuth);

export const getUserNameSelector = createSelector(
  user,
  (state) => state.userData.name
);
