import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignInData, ISignUpData, IUser } from "types/user";
import { IChangeUserData, IUserState } from "./types";

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
    getUserData: () => {},
    changeUserData: (state, { payload }: PayloadAction<IChangeUserData>) => {},
    setDataChangedOnServer: (state, { payload }: PayloadAction<boolean>) => {
      state.isDataChangedOnServer = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      // state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
