import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "redux/cart";
import { cartGamesSelector } from "redux/cart/selectors";
import { currentUserDataSelector } from "redux/user/selectors";
import { ButtonStyled, CartTotalPanelStyled, PStyled } from "./styles";

const CartTotalPanel = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const cartGames = useSelector(cartGamesSelector);

  const arrayOfGamePrices = cartGames?.map((game) => +game.price);
  const totalCost = arrayOfGamePrices?.reduce((sum, game) => sum + game, 0);

  const onClickBuyGames = () => {
    dispatch(cartActions.buyCartGames({ id, cartGames }));
  };

  return (
    <CartTotalPanelStyled>
      <PStyled>Total price: ${totalCost ? totalCost.toFixed(2) : 0}</PStyled>
      <ButtonStyled onClick={onClickBuyGames} disabled={!cartGames.length}>
        Buy
      </ButtonStyled>
    </CartTotalPanelStyled>
  );
};

export default CartTotalPanel;