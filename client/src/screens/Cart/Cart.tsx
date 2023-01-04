import { CartTotalPanel, Pagination } from "modules";
import { useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import {
  CartStyled,
  Title,
  CartIcon,
  SpanStyled,
  GameListWrapper,
} from "./styles";

const Cart = () => {
  const cartGames = useSelector(userSelector.cart);

  return (
    <CartStyled>
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
    </CartStyled>
  );
};

export default Cart;
