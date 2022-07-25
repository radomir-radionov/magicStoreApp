import { Spinner } from "components";
import { GameList, Greetings, SearchBar } from "modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { isLoadingSelector, searchedGamesSelector } from "redux/game/selectors";
import { HomePageStyled, SectionStyled, SectionSeatchBar } from "./styles";

const HomePage = () => {
  const dispatch = useDispatch();
  const searchedGames = useSelector(searchedGamesSelector);
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
    <HomePageStyled>
      <SectionStyled>
        <Greetings />
      </SectionStyled>
      <SectionSeatchBar>
        <SearchBar
          searchParam={searchText}
          onSelectedParams={onSelectedValue}
        />
        {isLoading ? (
          <Spinner />
        ) : searchedGames ? (
          <GameList games={searchedGames} />
        ) : (
          <p>Nothing was found</p>
        )}
      </SectionSeatchBar>
    </HomePageStyled>
  );
};

export default HomePage;
