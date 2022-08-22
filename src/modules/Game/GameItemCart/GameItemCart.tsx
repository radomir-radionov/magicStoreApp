import { useDispatch, useSelector } from "react-redux";
import { currentUserDataSelector } from "redux/user/selectors";
import { BUTTON_VARIANTS } from "components/Button/types";
import { IGame } from "types/game";
import { cartActions } from "redux/cart";
import {
  ButtonStyled,
  Description,
  GameDetails,
  GameDetailsWrapper,
  GameImg,
  GameImgBox,
  GameItemCartStyled,
  InteractPanel,
  Title,
} from "./styles";

interface IGameItemCartProps {
  game: IGame;
}

const GameItemCart = ({ game }: IGameItemCartProps) => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);

  const onClickRemoveItem = () => {
    dispatch(cartActions.removeGameInCart({ id, game }));
  };

  return (
    <GameItemCartStyled>
      <GameImgBox>
        <GameImg src={game.img} alt="Game Icon" />
      </GameImgBox>
      <GameDetailsWrapper>
        <GameDetails>
          <Title>{game.name}</Title>
          <Description>{game.description}</Description>
          <Description>Genre: {game.genre}</Description>
          <Description>Age: {game.age}+</Description>
          <Description>Price: ${game.price}</Description>
        </GameDetails>
        <InteractPanel>
          <ButtonStyled
            onClick={onClickRemoveItem}
            variant={BUTTON_VARIANTS.SECONDARY}
          >
            Remove
          </ButtonStyled>
        </InteractPanel>
      </GameDetailsWrapper>
    </GameItemCartStyled>
  );
};

export default GameItemCart;
