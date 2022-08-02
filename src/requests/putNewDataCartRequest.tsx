import { IUpdateCartDataPayload } from "redux/game/types";
import $api from "../http/index";

const putNewDataCartRequest = async ({
  id,
  cartGames,
}: IUpdateCartDataPayload) => {
  await $api.put("/putNewDataCart", { id, cartGames });
};

export default putNewDataCartRequest;
