import { FiltersBar, GameList } from "modules";
import { Spinner } from "components";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import { FilteredGames, GameFilterStyled, Hr, Title } from "./styles";

const GameFilter = () => {
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <GameFilterStyled>
      <FiltersBar />
      <FilteredGames>
        <Title textAlign="left">Products</Title>
        <Hr />
        {isLoading ? (
          <Spinner />
        ) : filteredGames.length ? (
          <GameList games={filteredGames} />
        ) : (
          <p>Just click an option in the filter bar...</p>
        )}
      </FilteredGames>
    </GameFilterStyled>
  );
};

export default GameFilter;
