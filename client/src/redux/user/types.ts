import { IUser } from "types/user";

export interface IUserState {
  isAuth: boolean;
  userData: IUser;
  isLoading: boolean;
  isDataChangedOnServer: boolean;
  error: {
    isError: boolean;
    status: string | null;
  };
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IChangeUserData {
  userId: string;
  newName: string;
  newDescription: string;
}
