import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRemoveGameInCartPayload } from "redux/game/types";
import { ISignInDataRequest, ISignUpDataRequest, IUser } from "types/user";
import { IChangedUserData, IUserState } from "./types";

const initialState: IUserState = {
  isAuth: false,
  userData: {} as IUser,
  isLoading: true,
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
    changeUserData: (
      state: IUserState,
      { payload }: PayloadAction<IChangedUserData>
    ) => {},
    removeGameInCart: (
      state: IUserState,
      { payload }: PayloadAction<IRemoveGameInCartPayload>
    ) => {},
    setError: (state: IUserState, { payload }: PayloadAction<string>) => {
      // state.userData = null;
      state.error.isError = true;
      state.error.status = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
