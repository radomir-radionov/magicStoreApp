import { Spinner } from "components";
import { Card, FiltersBar, Pagination, SearchBar } from "modules";
import { useSelector } from "react-redux";
import { filteredGamesSelector, isLoadingSelector } from "redux/game/selectors";
import { CardList, ProductStyled, SpanStyled, Header, Title } from "./styles";

const Product = () => {
  const filteredGames = useSelector(filteredGamesSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <ProductStyled>
      <Header>
        <Title>All games</Title>
      </Header>
      <SearchBar />
      <FiltersBar />
      <CardList>
        {isLoading ? (
          <Spinner />
        ) : filteredGames.length ? (
          filteredGames.map((game: any) => {
            const { id } = game;
            return <Card key={id} data={game} />;
          })
        ) : (
          <p>No one game by this name!!!</p>
        )}
      </CardList>
    </ProductStyled>
  );
};

export default Product;
