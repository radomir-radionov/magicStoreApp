import axios from "axios";
import { API_URL } from "../http/index";

const getTopGames = async () => {
  const response = await axios.get(`${API_URL}/getTopGames`);

  return response.data;
};

export default getTopGames;
