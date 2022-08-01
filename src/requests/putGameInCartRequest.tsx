import { ISetGameInCartPayload } from "redux/game/types";
import $api from "../http/index";

const postSignUpRequest = async ({ id, game }: ISetGameInCartPayload) => {
  const response = await $api.put("/putGameInCart", {
    id,
    game,
  });

  return response;
};

export default postSignUpRequest;
