import { GameFilter, SearchBar } from "modules";
import { ProductPageStyled, Title } from "./styles";

const ProductPage = () => {
  return (
    <ProductPageStyled>
      <Title>Find your favorite game</Title>
      <SearchBar />
      <GameFilter />
    </ProductPageStyled>
  );
};

export default ProductPage;
