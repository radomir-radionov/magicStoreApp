import serverEndpoints from "constants/serverEndpoints";
import { IEditGameData, INewGameData } from "types/game";
import { httpService } from "../http/index";

const gameService = {
  getGamesApi: async () => {
    const res = await httpService.get(serverEndpoints.GAMES_API);
    return res.data;
  },

  getGameData: async (gameData: any) => {
    const { gameId, gameName } = gameData.payload;
    const res = await httpService.get(
      `${serverEndpoints.GAME_DATA}?id=${gameId}&name=${gameName}`
    );
    return res.data;
  },
  getTopGamesApi: async () => {
    const res = await httpService.get(serverEndpoints.TOP_GAMES_API);
    return res.data;
  },
  getFilteredGames: async ({ payload }: any) => {
    const { platform, criteria, genre, age, searchText } = payload;
    const resp = await httpService.get(
      `${serverEndpoints.API_URL}/getFilteredGames?platform=${platform}&criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
    );
    return resp;
  },
  addNewGame: async (payload: INewGameData) => {
    const newGameData = payload;
    await httpService.post(serverEndpoints.ADD_NEW_GAME, {
      newGameData,
    });
  },
  editGame: async (payload: IEditGameData) => {
    const editedGameData = payload;
    await httpService.put(serverEndpoints.EDIT_GAME, {
      editedGameData,
    });
  },
};

export default gameService;
