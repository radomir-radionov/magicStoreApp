import { Card, CartTotalPanel, Pagination } from "modules";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userActions } from "redux/user";
import { userCartSelector } from "redux/user/selectors";
import {
  CartStyled,
  Title,
  CartIcon,
  SpanStyled,
  GameListWrapper,
} from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const cartGames = useSelector(userCartSelector);
  console.log("cartGames:", cartGames);

  useEffect(() => {
    dispatch(userActions.getUserCart());
  }, [dispatch]);

  return (
    <CartStyled>
      <Title>
        <CartIcon />
        My Cart
        <SpanStyled>{cartGames?.length || 0}</SpanStyled>
      </Title>
      <GameListWrapper>
        {cartGames?.map((game: any) => (
          <Card key={Math.random()} data={game} />
        ))}
        {/* <Pagination
          itemsPerPage={4}
          games={cartGames}
        /> */}
      </GameListWrapper>
      <CartTotalPanel />
    </CartStyled>
  );
};

export default Cart;
