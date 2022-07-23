import { AxiosResponse } from "axios";
import $api from "../http/index";
import { IAuthResponse } from "types/response";

const postSignUpRequest = async (
  email: string,
  password: string,
  name?: string
): Promise<AxiosResponse<IAuthResponse>> => {
  const response = $api.post<IAuthResponse>("/registration", {
    email,
    password,
    name,
  });
  return response;
};

export default postSignUpRequest;
