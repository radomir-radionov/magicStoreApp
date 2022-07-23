import { IUser } from "types/user";

export interface IUserState {
  isAuth: boolean;
  userData: IUser;
  isLoading: boolean;
  error: {
    isError: boolean;
    status: string | null;
  };
}

export interface IChangeUserDataAction {
  userId: string;
  newName: string;
  newDescription: string;
}

export interface IChangedUserData {
  userId: string;
  newName: string;
  newDescription: string;
}
