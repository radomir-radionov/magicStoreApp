import { AxiosResponse } from "axios";
import serverEndpoints from "constants/serverEndpoints";
import { IChangeUserData, ISignInData } from "redux/user/types";
import { IAuthResponse, ISignUpData } from "types/auth";
import { httpService } from "../http/index";

const userService = {
  isAuth: async () => {
    const response = await httpService.get<IAuthResponse>(
      serverEndpoints.REFRESH,
      {
        withCredentials: true,
      }
    );
    return response;
  },
  signUp: async (
    payload: ISignUpData
  ): Promise<AxiosResponse<IAuthResponse>> => {
    const response = httpService.post<IAuthResponse>(
      serverEndpoints.SIGN_UP,
      payload
    );
    return response;
  },
  signIn: async (
    payload: ISignInData
  ): Promise<AxiosResponse<IAuthResponse>> => {
    const response = await httpService.post<IAuthResponse>(
      serverEndpoints.SIGN_IN,
      payload
    );
    return response;
  },
  logout: async () => {
    await httpService.post(serverEndpoints.LOGOUT);
  },
  setUserImg: async (payload: any) => {
    await httpService.put(serverEndpoints.SAVE_IMAGE, payload);
  },
  updateUserData: async (payload: IChangeUserData) => {
    await httpService.put(serverEndpoints.UPDATE_USER_DATA, payload);
  },
};

export default userService;
