import { FiltersBar, GameList, SearchBar } from "modules";
import { Spinner } from "components";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import { userRoleSelector } from "redux/user/selectors";
import {
  FilteredGames,
  GameFilterStyled,
  WrapperFilteredGames,
  Hr,
  Title,
} from "./styles";

const GameFilter = () => {
  const filteredGames = useSelector(filteredGamesSelector);

  const isLoading = useSelector(isLoadingSelector);

  return (
    <GameFilterStyled>
      <WrapperFilteredGames>
        <FiltersBar />
        <FilteredGames>
          <Title>Searched Games</Title>
          <Hr />
          {isLoading ? (
            <Spinner />
          ) : filteredGames.length ? (
            <GameList games={filteredGames} />
          ) : (
            <p>Just click an option in the filter bar...</p>
          )}
        </FilteredGames>
      </WrapperFilteredGames>
    </GameFilterStyled>
  );
};

export default GameFilter;
