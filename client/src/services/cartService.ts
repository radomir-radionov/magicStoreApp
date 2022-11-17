import {
  IDeleteGameCartData,
  INewCartData,
  IPutGameInCartData,
} from "redux/cart/types";
import { IGetUserCartGamesData } from "types/game";
import { httpService } from "../http/index";

const cartService = {
  getUserCartGames: async (id: IGetUserCartGamesData) => {
    //will be fix soon
    const response = await httpService.get(`/getUserCartGames/${id}`);
    return response;
  },
  putGameInCart: async ({ id, game }: IPutGameInCartData) => {
    const response = await httpService.put("/putGameInCart", {
      id,
      game,
    });

    return response;
  },
  putNewDataCart: async ({ id, cartGames }: INewCartData) => {
    const response = await httpService.put("/putNewDataCart", {
      id,
      cartGames,
    });
    return response;
  },
  deleteGameCart: async ({ id, game }: IDeleteGameCartData) => {
    const response = await httpService.delete(
      `/deleteGameInCart/${id}/${game._id}`
    );

    return response;
  },
};

export default cartService;
