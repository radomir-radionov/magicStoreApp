import axios from "axios";
import { API_URL } from "../http/index";
import { IGetFilteredGames } from "./types";

const getFilteredGames = async ({
  age,
  criteria,
  genre,
  platform,
  searchText,
}: IGetFilteredGames) => {
  const { data } = await axios.get(
    `${API_URL}/product?platform=${platform}&criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
  );
  return data;
};

export default getFilteredGames;
