import $api from "../http/index";

export const putNewUserDataRequest = async ({
  userId,
  newName,
  newDescription,
}: any) => {
  await $api.put("/changeUserData", { userId, newName, newDescription });
};
