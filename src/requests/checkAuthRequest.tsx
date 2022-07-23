import axios from "axios";
import { API_URL } from "../http/index";
import { IAuthResponse } from "types/response";

const checkAuthRequest = async () => {
  const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
    withCredentials: true,
  });
  return response;
};

export default checkAuthRequest;
