import { IChangedUserData } from "redux/user/types";
import $api from "../http/index";

export const putNewUserDataRequest = async ({
  userId,
  newName,
  newDescription,
}: IChangedUserData) => {
  await $api.put("/changeUserData", { userId, newName, newDescription });
};
