import { useEffect } from "react";
import { GameList, SearchBar, TopGames, GameFilter } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "redux/game";
import { isLoadingSelector, searchedGamesSelector } from "redux/game/selectors";
import { useSearchParams } from "react-router-dom";
import { ProductPageStyled, SectionStyled } from "./styles";
import { Spinner } from "components";

const ProductPage = () => {
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
    <ProductPageStyled>
      <SectionStyled>
        <GameFilter />
      </SectionStyled>
    </ProductPageStyled>
  );
};

export default ProductPage;
