import { FiltersBar, GameList, SearchBar } from "modules";
import { Spinner } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import {
  FilteredGames,
  GameFilterStyled,
  WrapperFilteredGames,
  Hr,
  Title,
} from "./styles";

const GameFilter = () => {
  const dispatch = useDispatch();
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValue = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(gameActions.getSearchedGames(searchText));
  }, [dispatch, searchText]);

  return (
    <GameFilterStyled>
      <SearchBar searchParam={searchText} onSelectedParams={onSelectedValue} />
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
