import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import userSelector from "redux/user/selectors";
import { ButtonStyled, CartTotalPanelStyled, Text } from "./styles";

const CartTotalPanel = () => {
  const dispatch = useDispatch();
  const id = useSelector(userSelector.id);
  const cartGames = useSelector(userSelector.cart);

  const arrayOfGamePrices = cartGames?.map((game: any) => +game.price);
  const totalCost = arrayOfGamePrices?.reduce(
    (sum: any, game: any) => sum + game,
    0
  );

  const onClickBuyGames = () => {
    dispatch(userActions.buyCartGames({ id, cartGames }));
  };

  return (
    <CartTotalPanelStyled>
      <Text>Total price: ${totalCost ? totalCost.toFixed(2) : 0}</Text>
      <ButtonStyled onClick={onClickBuyGames} disabled={!cartGames.length}>
        Buy
      </ButtonStyled>
    </CartTotalPanelStyled>
  );
};

export default CartTotalPanel;
