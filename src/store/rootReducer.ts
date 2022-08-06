import { userReducer } from "redux/user";
import { gameReducer } from "redux/game";
import { modaReducer } from "redux/modal";
import { cartReducer } from "redux/cart";

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
  game: gameReducer,
  modal: modaReducer,
};

export default rootReducer;
