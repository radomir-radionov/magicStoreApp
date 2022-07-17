import { IAuthResponse } from "types/response";

export interface IUserState {
  test: any;
  isAuth: boolean;
  userData: IAuthResponse | null;
  error: {
    isError: boolean;
    status: string | null;
  };
}
