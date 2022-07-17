import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "types/response";
import { ISignInDataRequest, ISignUpDataRequest } from "types/user";
import { IUserState } from "./types";

const initialState: IUserState = {
  test: null,
  isAuth: false,
  userData: {} as IAuthResponse,
  error: {
    isError: false,
    status: null,
  },
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<IAuthResponse>) => {
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
    logout: (state: IUserState) => {},
    test: (
      state: IUserState,
      { payload }: PayloadAction<ISignUpDataRequest>
    ) => {
      state.test = payload;
    },
    setAuth: (state: IUserState, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setError: (state: IUserState, { payload }: PayloadAction<string>) => {
      state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
