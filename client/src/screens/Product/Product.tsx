import { Spinner } from "components";
import { FiltersBar, Pagination, SearchBar } from "modules";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import { FilteredGames, ProductStyled, SpanStyled, Title } from "./styles";

const Product = () => {
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <ProductStyled>
      <FiltersBar />
      <FilteredGames>
        <SearchBar />
        <Title>
          Searched Games <SpanStyled>{filteredGames.length}</SpanStyled>
        </Title>
        {isLoading ? (
          <Spinner />
        ) : filteredGames.length ? (
          <Pagination games={filteredGames} itemsPerPage={3} />
        ) : (
          <p>No one game by this name!!!</p>
        )}
      </FilteredGames>
    </ProductStyled>
  );
};

export default Product;
