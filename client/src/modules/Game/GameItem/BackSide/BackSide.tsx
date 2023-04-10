import { Button } from "components";
import { BUTTON_VARIANTS } from "components/Button/types";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { userActions } from "redux/user";
import userSelector from "redux/user/selectors";
import { IGame } from "types/game";
import { Age, Description, Footer } from "./styles";

interface IBackSideProps {
  game: IGame;
}

const BackSide = ({ game }: IBackSideProps) => {
  const dispatch = useDispatch();
  const id = useSelector(userSelector.id);
  const cart = useSelector(userSelector.cart);
  const { description, age } = game;

  const onClickAddGameInCart = () => {
    dispatch(userActions.setGameToCart({ id, game }));
  };

  const onClickEditGame = () => {
    dispatch(
      modalActionTypes.openModal({
        type: MODAL_TYPES.EDIT_GAME_MODAL,
        modalInfo: { gameData: game },
      })
    );
  };

  const isEven = cart?.some((cartGame: any) => cartGame._id === game._id);

  return (
    <>
      <Description>{description}</Description>
      <Age>{age}+</Age>
      <Footer>
        <Button
          onClick={onClickAddGameInCart}
          variant={BUTTON_VARIANTS.SECONDARY}
          disabled={isEven}
        >
          Add to cart
        </Button>
        <Button onClick={onClickEditGame} variant={BUTTON_VARIANTS.ADMIN}>
          Edit game
        </Button>
      </Footer>
    </>
  );
};

export default BackSide;
