import serverEndpoints from "constants/serverEndpoints";
import { IFilteredGamesParams, INewGameData } from "types/game";
import { httpService } from "../http/index";

const gameService = {
  getTopGames: async () => {
    const response = await httpService.get(serverEndpoints.TOP_GAMES);
    return response.data;
  },
  getFilteredGames: async ({
    age,
    criteria,
    genre,
    platform,
    searchText,
  }: IFilteredGamesParams) => {
    const { data } = await httpService.get(
      //will be fix soon
      `${serverEndpoints.API_URL}/product?platform=${platform}&criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
    );
    return data;
  },
  getSearchedGames: async (searchText: string) => {
    const response = await httpService.get(
      //will be fix soon
      `${serverEndpoints.API_URL}/search?searchText=${searchText}`
    );
    return response.data;
  },
  addNewGame: async (payload: INewGameData) => {
    const newGameData = payload;
    await httpService.post(serverEndpoints.ADD_NEW_GAME, {
      newGameData,
    });
  },
};

export default gameService;
