import $api from "../http/index";

const postLogout = async (): Promise<void> => {
  await $api.post("/logout");
};

export default postLogout;
