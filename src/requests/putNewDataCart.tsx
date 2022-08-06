import { IUpdateCartData } from "redux/cart/types";
import $api from "../http/index";

const putNewDataCart = async ({ id, cartGames }: IUpdateCartData) => {
  await $api.put("/putNewDataCart", { id, cartGames });
};

export default putNewDataCart;
