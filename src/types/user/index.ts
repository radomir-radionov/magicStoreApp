export interface IUser {
  id: string;
  email: string;
  name: string;
  description: string;
}

export interface ISignUpDataRequest {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface ISignInDataRequest {
  email: string;
  password: string;
}
