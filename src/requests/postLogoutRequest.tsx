import $api from "../http/index";

const postLogoutRequest = async (): Promise<void> => {
  return $api.post("/logout");
};

export default postLogoutRequest;
