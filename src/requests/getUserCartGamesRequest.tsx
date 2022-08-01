import $api from "../http/index";

const getUserCartGamesRequest = async ({ id }: any) => {
  const response = await $api.get(`/getUserCartGames/${id}`);

  return response;
};

export default getUserCartGamesRequest;
