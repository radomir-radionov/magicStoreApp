import axios from "axios";
import { API_URL } from "../http/index";

const getFilteredGamesRequest = async ({
  age,
  criteria,
  genre,
  platform,
  searchText,
}: any) => {
  const { data } = await axios.get(
    `${API_URL}/product?criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
  );
  return data;
};

export default getFilteredGamesRequest;
