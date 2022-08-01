import { BUTTON_VARIANTS } from "components/Button/types";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import { currentUserDataSelector } from "redux/user/selectors";
import { IGame } from "types/game/game";
import {
  ButtonStyled,
  Description,
  GameDetails,
  GameImg,
  GameImgBox,
  GameItemCartStyled,
  Title,
} from "./styles";

interface IGameItemCartProps {
  game: IGame;
}

const GameItemCart = ({ game }: IGameItemCartProps) => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);

  const onClickRemoveItem = () => {
    dispatch(userActions.removeGameInCart({ id, game }));
  };

  return (
    <GameItemCartStyled>
      <GameImgBox>
        <GameImg src={game.img} alt="Game Icon" />
      </GameImgBox>
      <GameDetails>
        <Title>{game.name}</Title>
        <Description>{game.description}</Description>
        <Description>Genre: {game.genre}</Description>
        <Description>Age: {game.age}+</Description>
        <Description>Price: ${game.price}</Description>{" "}
        <ButtonStyled
          onClick={onClickRemoveItem}
          variant={BUTTON_VARIANTS.SECONDARY}
          // disabled={isEven}
        >
          Remove
        </ButtonStyled>
      </GameDetails>
    </GameItemCartStyled>
  );
};

export default GameItemCart;
