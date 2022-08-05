import axios from "axios";
import { API_URL } from "../http/index";
import { IGetFilteredGamesRequest } from "./types";

const getFilteredGamesRequest = async ({
  age,
  criteria,
  genre,
  platform,
  searchText,
}: IGetFilteredGamesRequest) => {
  console.log(age, criteria, genre, platform, searchText);
  const { data } = await axios.get(
    `${API_URL}/product?platform=${platform}&criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
  );
  return data;
};

export default getFilteredGamesRequest;
