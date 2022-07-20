import { IUser } from "types/user";

export interface IUserState {
  test: any;
  isAuth: boolean;
  userData: IUser;
  isLoading: boolean;
  error: {
    isError: boolean;
    status: string | null;
  };
}
