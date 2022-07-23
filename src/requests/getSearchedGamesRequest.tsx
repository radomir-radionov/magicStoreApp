import axios from "axios";
import { API_URL } from "../http/index";

const getSearchedGamesRequest = async (searchText: string) => {
  const response = await axios.get(
    `${API_URL}/search?searchText=${searchText}`
  );
  return response.data;
};

export default getSearchedGamesRequest;
