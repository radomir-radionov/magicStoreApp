import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignUpDataPayload, IUserState } from "./types";

const initialState: IUserState = {
  isAuth: false,
  userData: null,
  error: {
    isError: false,
    status: null,
  },
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    example: (
      state: IUserState,
      { payload }: PayloadAction<ISignUpDataPayload>
    ) => {
      state.isAuth = true;
      state.userData = payload;
    },
    setUser: (
      state: IUserState,
      { payload }: PayloadAction<ISignUpDataPayload>
    ) => {
      state.isAuth = true;
      state.userData = payload;
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
