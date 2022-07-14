export interface IUserState {
  isAuth: boolean;
  userData: any;
  error: {
    isError: boolean;
    status: string | null;
  };
}

export interface ISignUpDataPayload {
  email: string;
  name: string;
  password: string;
  id: string;
}
