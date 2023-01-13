import { Spinner } from "components";
import { Card, FiltersBar, Pagination, SearchBar } from "modules";
import { useSelector } from "react-redux";
import { gamesSelector } from "redux/game";
import { gamesApiSelector, isLoadingSelector } from "redux/game/selectors";
import { CardList } from "screens/Test/styles";
import { FilteredGames, ProductStyled, SpanStyled, Title } from "./styles";

const Product = () => {
  const filteredGames = useSelector(gamesSelector);
  const isLoading = useSelector(isLoadingSelector);
  const games = useSelector(gamesApiSelector);

  return (
    <ProductStyled>
      {/* <FiltersBar /> */}
      <CardList>
        {games.map((game: any) => {
          const { id } = game;
          return <Card key={id} data={game} />;
        })}
      </CardList>
      {/* <FilteredGames>
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
      </FilteredGames> */}
    </ProductStyled>
  );
};

export default Product;
