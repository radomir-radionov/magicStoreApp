import { GameFilter, SearchBar } from "modules";
import { ProductPageStyled, SearchBarWrapper, Title } from "./styles";

const ProductPage = () => {
  return (
    <ProductPageStyled>
      <Title>Find your favorite game</Title>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <GameFilter />
    </ProductPageStyled>
  );
};

export default ProductPage;
