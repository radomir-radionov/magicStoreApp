import { GameItemCart } from "modules";
import { useSelector } from "react-redux";
import { cartGamesSelector } from "redux/user/selectors";
import { CartPageStyled, Title, CartIcon, SpanStyled } from "./styles";

const CartPage = () => {
  const cartGames = useSelector(cartGamesSelector);

  return (
    <CartPageStyled>
      <Title>
        <CartIcon />
        My Cart
        <SpanStyled>{cartGames?.length || 0}</SpanStyled>
      </Title>
      {cartGames?.map((game) => (
        <GameItemCart key={game._id} game={game} />
      ))}
    </CartPageStyled>
  );
};

export default CartPage;
