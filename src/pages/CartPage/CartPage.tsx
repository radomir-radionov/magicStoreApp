import { CartTotalPanel, GameList, Pagination } from "modules";
import { useSelector } from "react-redux";
import { cartGamesSelector } from "redux/user/selectors";
import {
  CartPageStyled,
  Title,
  CartIcon,
  SpanStyled,
  GameListWrapper,
} from "./styles";

const CartPage = () => {
  const cartGames = useSelector(cartGamesSelector);

  return (
    <CartPageStyled>
      <Title>
        <CartIcon />
        My Cart
        <SpanStyled>{cartGames?.length || 0}</SpanStyled>
      </Title>
      <GameListWrapper>
        <Pagination
          itemsPerPage={4}
          games={cartGames}
          kindOfGames="cartGames"
        />
      </GameListWrapper>
      <CartTotalPanel />
    </CartPageStyled>
  );
};

export default CartPage;
