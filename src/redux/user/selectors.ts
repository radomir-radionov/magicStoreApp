import { createSelector } from "@reduxjs/toolkit";

const user = (state: any) => state.user;

export const getCurrentUserDataSelector = createSelector(
  user,
  (state) => state.userData
);

export const getIsAuthSelector = createSelector(user, (state) => state.isAuth);

export const getUserNameSelector = createSelector(
  user,
  (state) => state.userData?.user?.name
);
