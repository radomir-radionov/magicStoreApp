import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import {
  cartGamesSelector,
  currentUserDataSelector,
} from "redux/user/selectors";
import { ButtonStyled, CartTotalPanelStyled, PStyled } from "./styles";

const CartTotalPanel = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const cartGames = useSelector(cartGamesSelector);

  const arrayOfGamePrices = cartGames?.map((game) => +game.price);
  const totalCost = arrayOfGamePrices?.reduce((sum, game) => sum + game, 0);

  const onClickBuyGames = () => {
    dispatch(userActions.updateCartData({ id, cartGames }));
  };

  return (
    <CartTotalPanelStyled>
      <PStyled>Total price: ${totalCost ? totalCost.toFixed(2) : 0}</PStyled>
      <ButtonStyled onClick={onClickBuyGames}>Buy</ButtonStyled>
    </CartTotalPanelStyled>
  );
};

export default CartTotalPanel;
