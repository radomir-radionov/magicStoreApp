import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignUpData } from "types/auth";
import { IUser } from "types/user";
import {
  IChangeUserData,
  IDeleteGameCartData,
  INewCartData,
  IPutGameInCartData,
  ISignInData,
  IUserState,
} from "./types";

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
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.userData = payload;
    },
    registration: (state, { payload }: PayloadAction<ISignUpData>) => {},
    login: (state, { payload }: PayloadAction<ISignInData>) => {},
    logout: () => {},
    setUserId: (state, { payload }) => {
      state.userData.id = payload;
    },
    checkAuth: () => {},
    getUserData: (state, { payload }) => {},
    changeUserData: (state, { payload }: PayloadAction<IChangeUserData>) => {},
    isDataChangedOnServer: (state, { payload }: any) => {
      state.isDataChangedOnServer = payload;
    },
    uploadImg: (state, { payload }) => {},
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

export const userActions = userSlice.actions;

export default userSlice.reducer;
