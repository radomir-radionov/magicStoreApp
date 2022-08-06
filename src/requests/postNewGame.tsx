import $api from "../http/index";
import { INewGameData } from "types/game";

const postNewGame = async (payload: INewGameData) => {
  const newGameData = payload;
  await $api.post("/addNewGame", {
    newGameData,
  });
};

export default postNewGame;
