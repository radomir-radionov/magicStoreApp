import { GameFilter } from "modules";
import { ProductPageStyled, Title } from "./styles";

const ProductPage = () => {
  return (
    <ProductPageStyled>
      <Title>Find your favorite game</Title>
      <GameFilter />
    </ProductPageStyled>
  );
};

export default ProductPage;
