import { IRemoveGameInCartPayload } from "redux/game/types";
import $api from "../http/index";

const deleteGameCartRequest = async ({
  id,
  game,
}: IRemoveGameInCartPayload) => {
  const response = await $api.delete(`/deleteGameInCart/${id}/${game._id}`);

  return response;
};

export default deleteGameCartRequest;
