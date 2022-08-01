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

export interface IChangedUserData {
  userId: string;
  newName: string;
  newDescription: string;
}

export interface IGetUserCartGames {
  id: string;
}
