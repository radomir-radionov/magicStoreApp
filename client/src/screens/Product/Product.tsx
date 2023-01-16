import { Spinner } from "components";
import { Card, FiltersBar, Pagination, SearchBar } from "modules";
import { useSelector } from "react-redux";
import { gamesSelector } from "redux/game";
import {
  filteredGamesSelector,
  gamesApiSelector,
  isLoadingSelector,
} from "redux/game/selectors";
import {
  CardList,
  FilteredGames,
  ProductStyled,
  SpanStyled,
  Header,
  Title,
} from "./styles";

const Product = () => {
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  console.log(filteredGames);

  return (
    <ProductStyled>
      <Header>
        <Title>All games</Title>
      </Header>
      <FiltersBar />
      <CardList>
        {isLoading ? (
          <Spinner />
        ) : (
          filteredGames.map((game: any) => {
            const { id } = game;
            return <Card key={id} data={game} />;
          })
        )}
      </CardList>
      {/* <FiltersBar /> */}
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
