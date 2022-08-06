import { AxiosResponse } from "axios";
import $api from "../http/index";
import { IAuthResponse } from "types/response";

const postSignIn = async (
  email: string,
  password: string
): Promise<AxiosResponse<IAuthResponse>> => {
  const response = await $api.post<IAuthResponse>("/login", {
    email,
    password,
  });
  return response;
};

export default postSignIn;
