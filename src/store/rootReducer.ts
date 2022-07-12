import { modaReducer } from "redux/modal";
import { userReducer } from "redux/user";

const rootReducer = {
  user: userReducer,
  modal: modaReducer,
};

export default rootReducer;
