import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  isAuth: boolean;
  userData: any;
}
const initialState: IUserState = {
  isAuth: false,
  userData: null,
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setUser: (state: any) => {
      state.isAuth = true;
      // state.isAuth = true;
      // state.currentUser = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
