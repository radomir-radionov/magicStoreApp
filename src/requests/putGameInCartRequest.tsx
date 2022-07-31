import { ISetGameInCartPayload } from "redux/game/types";
import $api from "../http/index";

const postSignUpRequest = async ({ id, game }: ISetGameInCartPayload) => {
  await $api.put("/putGameInCart", {
    id,
    game,
  });
};

export default postSignUpRequest;
