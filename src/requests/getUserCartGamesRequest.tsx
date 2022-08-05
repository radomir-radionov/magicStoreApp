import $api from "../http/index";
import { IGetUserCartGamesRequest } from "./types";

const getUserCartGamesRequest = async ({ id }: IGetUserCartGamesRequest) => {
  const response = await $api.get(`/getUserCartGames/${id}`);

  return response;
};

export default getUserCartGamesRequest;
