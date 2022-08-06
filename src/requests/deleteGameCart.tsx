import { IRemoveGameInCart } from "redux/cart/types";
import $api from "../http/index";

const deleteGameCart = async ({ id, game }: IRemoveGameInCart) => {
  const response = await $api.delete(`/deleteGameInCart/${id}/${game._id}`);

  return response;
};

export default deleteGameCart;
