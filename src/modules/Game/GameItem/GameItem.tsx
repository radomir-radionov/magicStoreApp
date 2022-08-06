import { GameRating } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { IGame } from "types/game";
import { PC, Playstation, Xbox } from "assets";
import { currentUserDataSelector } from "redux/user/selectors";
import {
  Age,
  Back,
  Body,
  Description,
  Footer,
  Front,
  GameItemStyled,
  ImgBox,
  Icon,
  Platforms,
  Price,
  Title,
} from "./styles";
import { BUTTON_VARIANTS } from "components/Button/types";
import { modalActionTypes } from "redux/modal";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { Button } from "components";
import { cartActions } from "redux/cart";
import { cartGamesSelector } from "redux/cart/selectors";

interface IGameItemProps {
  game: IGame;
}

const GameItem = ({ game }: IGameItemProps) => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const cart = useSelector(cartGamesSelector);

  const { _id, name, genre, img, price, rating, description, age, platform } =
    game;

  const isEven = cart?.some((cartGame) => cartGame._id === game._id);

  const onClickRemoveItem = () => {
    dispatch(cartActions.removeGameInCart({ id, game }));
  };

  // ----------------------------------------------------

  // add in service

  // const dateTime = new Date();
  // let month = dateTime.getMonth().toString();
  // if (dateTime.getMonth() < 10) {
  //   month = `${dateTime.getMonth()}${1}`;
  // }
  // let day = dateTime.getDate().toString();
  // if (dateTime.getDate() < 10) {
  //   day = `0${dateTime.getDate()}`;
  // }
  // const date = `${month}/${day}/${dateTime.getFullYear()}`;
  // ----------------------------------------------------

  const onClickAddGameInCart = () => {
    // console.log(111);
    // const isEven = cartGames.some(
    //   (cartGame) => currentGameData._id === cartGame._id
    // );
    // if (!isEven) {
    dispatch(cartActions.setGameInCart({ id, game }));
    // }
  };

  const onClickEditGame = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.EDIT_GAME_MODAL })
    );
  };

  const dataPlatforms = platform.map((itemPlatform) => ({
    name: itemPlatform,
    image:
      itemPlatform === "Playstation"
        ? Playstation
        : itemPlatform === "Xbox"
        ? Xbox
        : PC,
  }));

  return (
    <GameItemStyled>
      <Front>
        <Platforms>
          {dataPlatforms.map((dataPlatform) => (
            <Icon
              key={dataPlatform.name}
              src={dataPlatform.image}
              alt={dataPlatform.name}
            />
          ))}
        </Platforms>
        <ImgBox img={img} />
        <Body>
          <Title>{name}</Title>
          <Price>{price}$</Price>
        </Body>
        <GameRating rating={rating} />
      </Front>
      <Back>
        <Description>{description}</Description>
        <Age>{age}+</Age>
        {/* {currentUser?.role === "Admin" &&  */}
        <Footer>
          <Button
            type="submit"
            onClick={onClickAddGameInCart}
            variant={BUTTON_VARIANTS.SECONDARY}
            disabled={isEven}
          >
            Add to cart
          </Button>
          <Button
            type="submit"
            onClick={onClickEditGame}
            variant={BUTTON_VARIANTS.ADMIN}
            disabled={isEven}
          >
            Edit game
          </Button>
        </Footer>
      </Back>
    </GameItemStyled>
  );
};

export default GameItem;
