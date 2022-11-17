import { AxiosResponse } from "axios";
import serverEndpoints from "constants/serverEndpoints";
import {
  IChangeUserData,
  IDeleteGameCartData,
  INewCartData,
  IPutGameInCartData,
  ISignInData,
} from "redux/user/types";
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
  getUserData: async (id: string) => {
    const resp = await httpService.get(
      `${serverEndpoints.GET_USER_DATA}/${id}`
    );
    return resp;
  },
  updateUserData: async (payload: IChangeUserData) => {
    const resp = await httpService.put(
      serverEndpoints.UPDATE_USER_DATA,
      payload
    );
    return resp;
  },
  putGameInCart: async ({ id, game }: IPutGameInCartData) => {
    const response = await httpService.put("/putGameInCart", {
      id,
      game,
    });

    return response;
  },
  putNewDataCart: async ({ id, cartGames }: INewCartData) => {
    const response = await httpService.put("/putNewDataCart", {
      id,
      cartGames,
    });
    return response;
  },
  deleteGameCart: async ({ id, game }: IDeleteGameCartData) => {
    const response = await httpService.delete(
      `/deleteGameInCart/${id}/${game._id}`
    );
    return response;
  },
};

export default userService;
