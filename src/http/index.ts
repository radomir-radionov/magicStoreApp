import axios from "axios";
import serverEndpoints from "constants/serverEndpoints";
import { IAuthDataResponse } from "types/response";

const $api = axios.create({
  withCredentials: true,
  baseURL: serverEndpoints.API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthDataResponse>(
          `${serverEndpoints.API_URL}/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Is not authorized");
      }
    }
    throw error;
  }
);

export const httpService = {
  get: $api.get,
  post: $api.post,
  put: $api.put,
  delete: $api.delete,
};
