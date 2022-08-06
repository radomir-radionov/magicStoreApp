import $api from "../http/index";
import { IGetUserCartGamesRequest } from "./types";

const getUserCartGames = async ({ id }: IGetUserCartGamesRequest) => {
  const response = await $api.get(`/getUserCartGames/${id}`);

  return response;
};

export default getUserCartGames;
