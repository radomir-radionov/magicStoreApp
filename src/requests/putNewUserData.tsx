import { IChangeUserData } from "redux/user/types";
import $api from "../http/index";

const putNewUserData = async ({
  userId,
  newName,
  newDescription,
}: IChangeUserData) => {
  await $api.put("/changeUserData", { userId, newName, newDescription });
};

export default putNewUserData;
