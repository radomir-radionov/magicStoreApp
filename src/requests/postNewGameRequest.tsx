import $api from "../http/index";
import { INewGameData } from "types/game";

const postNewGameRequest = async (payload: INewGameData) => {
  const newGameData = payload;
  await $api.post("/addNewGame", {
    newGameData,
  });
};

export default postNewGameRequest;
