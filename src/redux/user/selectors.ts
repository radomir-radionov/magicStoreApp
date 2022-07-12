import { createSelector } from "@reduxjs/toolkit";

const User = (state: any) => state.user;

export const getCurrentUserDataSelector = createSelector(
  User,
  (state) => state.userData
);
