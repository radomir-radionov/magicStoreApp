import $api from "../http/index";

const postLogoutRequest = async (): Promise<void> => {
  await $api.post("/logout");
};

export default postLogoutRequest;
