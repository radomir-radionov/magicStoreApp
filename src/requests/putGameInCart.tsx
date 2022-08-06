import { ISetGameInCart } from "redux/cart/types";
import $api from "../http/index";

const postSignUp = async ({ id, game }: ISetGameInCart) => {
  const response = await $api.put("/putGameInCart", {
    id,
    game,
  });

  return response;
};

export default postSignUp;
