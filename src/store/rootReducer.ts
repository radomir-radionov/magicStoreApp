import { userReducer } from "redux/user";
import { gameReducer } from "redux/game";
import { modaReducer } from "redux/modal";

const rootReducer = {
  user: userReducer,
  game: gameReducer,
  modal: modaReducer,
};

export default rootReducer;
