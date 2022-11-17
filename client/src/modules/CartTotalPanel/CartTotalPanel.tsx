import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import {
  currentUserDataSelector,
  userCartSelector,
} from "redux/user/selectors";
import { ButtonStyled, CartTotalPanelStyled, Text } from "./styles";

const CartTotalPanel = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const cartGames = useSelector(userCartSelector);

  const arrayOfGamePrices = cartGames?.map((game) => +game.price);
  const totalCost = arrayOfGamePrices?.reduce((sum, game) => sum + game, 0);

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
