import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const user = (state: RootState) => state.user;

export const currentUserDataSelector = createSelector(
  user,
  (state) => state.userData
);

export const userIdSelector = createSelector(
  user,
  (state) => state.userData.id
);

export const userRoleSelector = createSelector(
  user,
  (state) => state.userData.role
);

export const isAuthSelector = createSelector(user, (state) => state.isAuth);

export const userNameSelector = createSelector(
  user,
  (state) => state.userData.name
);

export const isDataChangedOnServerSelector = createSelector(
  user,
  (state) => state.isDataChangedOnServer
);

export const userCartSelector = createSelector(
  user,
  (state) => state.userData.cart
);
