import { useDispatch, useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import { BUTTON_VARIANTS } from "components/Button/types";
import { IGame } from "types/game";
import {
  ButtonStyled,
  Description,
  GameDetails,
  GameDetailsWrapper,
  Img,
  ImgBox,
  GameItemCartStyled,
  InteractPanel,
  Title,
} from "./styles";
import { userActions } from "redux/user";

interface IGameItemCartProps {
  game: IGame;
}

const GameItemCart = ({ game }: IGameItemCartProps) => {
  const dispatch = useDispatch();
  const id = useSelector(userSelector.id);

  const onClickRemoveItem = () => {
    dispatch(userActions.removeGameInCart({ id, game }));
  };

  return (
    <GameItemCartStyled>
      <ImgBox>
        <Img src={game.img} alt="Game Icon" />
      </ImgBox>
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
