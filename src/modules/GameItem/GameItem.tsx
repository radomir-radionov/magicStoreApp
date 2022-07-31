import { GameRating } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { IGame } from "types/game/game";
import { PC, Playstation, Xbox } from "assets";
import { gameActions } from "redux/game";
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
  ButtonStyled,
} from "./styles";
import { BUTTON_VARIANTS } from "components/Button/types";

interface IGameItemProps {
  game: IGame;
}

const GameItem = ({ game }: IGameItemProps) => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);
  const {
    _id,
    name,
    genre,
    img,
    price,
    rating,
    description,
    age,
    platform,
    selected,
  } = game;

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

  const onClickAddGameHandler = () => {
    // console.log(111);
    // const isEven = cartGames.some(
    //   (cartGame) => currentGameData._id === cartGame._id
    // );
    // if (!isEven) {
    dispatch(gameActions.setGameInCart({ id, game }));
    // }
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
        {/* {currentUser?.role === "Admin" && ( */}
        <Footer>
          <ButtonStyled
            type="submit"
            onClick={onClickAddGameHandler}
            variant={BUTTON_VARIANTS.SECONDARY}
          >
            Add to cart
          </ButtonStyled>
          {/* <Button type="submit" onClick={onClickEditGameHandler}>
            Edit
          </Button> */}
        </Footer>
        {/* )} */}
        {/* {currentUser?.role === "User" && ( */}
        {/* <Footer>
          <Button type="submit" onClick={onClickAddGameHandler}>
            Add to cart
          </Button>
        </Footer> */}
        {/* )} */}
      </Back>
    </GameItemStyled>
  );
};

export default GameItem;
