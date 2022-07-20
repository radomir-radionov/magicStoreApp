import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignInDataRequest, ISignUpDataRequest, IUser } from "types/user";
import { IUserState } from "./types";

const initialState: IUserState = {
  test: null,
  isAuth: false,
  userData: {} as IUser,
  isLoading: false,
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
    checkAuth: () => {},
    setAuth: (state: IUserState, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    changeUserData: (state: IUserState, { payload }: PayloadAction<any>) => {},
    setError: (state: IUserState, { payload }: PayloadAction<string>) => {
      // state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
    test: (
      state: IUserState,
      { payload }: PayloadAction<ISignUpDataRequest>
    ) => {
      state.test = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
