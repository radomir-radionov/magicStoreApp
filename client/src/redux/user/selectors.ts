import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const userState = (state: RootState) => state.user;

export const userCartSelector = createSelector(
  userState,
  (state) => state.userData.cart
);

const data = createSelector(userState, (state) => state.userData);
const id = createSelector(userState, (state) => state.userData.id);
const role = createSelector(userState, (state) => state.userData.role);
const name = createSelector(userState, (state) => state.userData.name);
const cart = createSelector(userState, (state) => state.userData.cart);
const isAuth = createSelector(userState, (state) => state.isAuth);
const isDataChangedOnServer = createSelector(
  userState,
  (state) => state.isDataChangedOnServer
);

const user = {
  data,
  id,
  role,
  isAuth,
  name,
  isDataChangedOnServer,
  cart,
};

export default user;
