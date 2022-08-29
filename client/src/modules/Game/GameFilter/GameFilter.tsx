import { FiltersBar, Pagination, SearchBar } from "modules";
import { Spinner } from "components";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import {
  FilteredGames,
  GameFilterStyled,
  Hr,
  Title,
  SpanStyled,
} from "./styles";

const GameFilter = () => {
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <GameFilterStyled>
      <FiltersBar />
      <FilteredGames>
        <SearchBar />
        <Title>
          Searched Games <SpanStyled>{filteredGames.length}</SpanStyled>
        </Title>
        <Hr />
        {isLoading ? (
          <Spinner />
        ) : filteredGames.length ? (
          <Pagination games={filteredGames} itemsPerPage={3} />
        ) : (
          <p>No one game by this name!!!</p>
        )}
      </FilteredGames>
    </GameFilterStyled>
  );
};

export default GameFilter;
