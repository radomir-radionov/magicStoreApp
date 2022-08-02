import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IRemoveGameInCartPayload,
  ISetGameInCartPayload,
  IUpdateCartDataPayload,
} from "redux/game/types";
import { IGame } from "types/game/game";
import { ISignInDataRequest, ISignUpDataRequest, IUser } from "types/user";
import { IChangedUserData, IGetUserCartGames, IUserState } from "./types";

const initialState: IUserState = {
  isAuth: false,
  userData: {} as IUser,
  isLoading: true,
  isDataChangedOnServer: false,
  error: {
    isError: false,
    status: null,
  },
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<IUser>) => {
      state.userData = payload;
    },
    registration: (
      state: IUserState,
      { payload }: PayloadAction<ISignUpDataRequest>
    ) => {},
    login: (
      state: IUserState,
      { payload }: PayloadAction<ISignInDataRequest>
    ) => {},
    logout: () => {},
    getUserData: () => {},
    setAuth: (state: IUserState, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    getUserCartGames: (
      state: IUserState,
      { payload }: PayloadAction<IGetUserCartGames>
    ) => {},
    setUserCartGames: (
      state: IUserState,
      { payload }: PayloadAction<IGame[]>
    ) => {
      state.userData.cart = payload;
    },
    changeUserData: (
      state: IUserState,
      { payload }: PayloadAction<IChangedUserData>
    ) => {},
    setGameInCart: (
      state: IUserState,
      { payload }: PayloadAction<ISetGameInCartPayload>
    ) => {},
    removeGameInCart: (
      state: IUserState,
      { payload }: PayloadAction<IRemoveGameInCartPayload>
    ) => {},
    updateCartData: (
      state: IUserState,
      { payload }: PayloadAction<IUpdateCartDataPayload>
    ) => {},
    setDataChangedOnServer: (
      state: IUserState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isDataChangedOnServer = payload;
    },
    setError: (state: IUserState, { payload }: PayloadAction<string>) => {
      // state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
