import { IRemoveGameInCartPayload } from "redux/game/types";
import $api from "../http/index";

const deleteGameCartRequest = async ({
  id,
  game,
}: IRemoveGameInCartPayload) => {
  await $api.delete(`/deleteGameInCart/${id}/${game._id}`);
};

export default deleteGameCartRequest;
