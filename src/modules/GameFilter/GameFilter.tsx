import { FiltersBar, GameList, Pagination } from "modules";
import { Spinner } from "components";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
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
          <Title>Searched Games {filteredGames.length}</Title>
          <Hr />
          {isLoading ? (
            <Spinner />
          ) : filteredGames.length ? (
            <Pagination games={filteredGames} itemsPerPage={3} />
          ) : (
            <p>Just click an option in the filter bar...</p>
          )}
        </FilteredGames>
      </WrapperFilteredGames>
    </GameFilterStyled>
  );
};

export default GameFilter;
