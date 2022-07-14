import axios from "axios";
import dataServer from "constants/dataServer";

const postSignUpRequest = async (
  email: string,
  name: string,
  password: string,
  role = null
) => {
  const response = await axios.post(`${dataServer.SIGN_UP}`, {
    email,
    name,
    password,
    role,
  });
  return response.data.user;
};

export default postSignUpRequest;
