import { PC, Playstation, Xbox } from "assets";
import { GameRating } from "modules";
import { useDispatch } from "react-redux";
import { IGame } from "types/game/game";
import {
  Age,
  Back,
  Body,
  Button,
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

interface IGameItemProps {
  game: IGame;
}

const GameItem = ({ game }: IGameItemProps) => {
  const dispatch = useDispatch();
  const {
    _id,
    name,
    genre,
    image,
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

  const onClickEditGameHandler = () => {
    // dispatch(addEditGameData(currentGameData));
    // dispatch(openModal({ type: MODAL_TYPES.EDIT_GAME_MODAL }));
    console.log("onClickEditGameHandler");
  };

  const onClickAddGameHandler = () => {
    // const isEven = cartGames.some(
    //   (cartGame) => currentGameData._id === cartGame._id
    // );
    // if (!isEven) {
    //   dispatch(addGameInCart(currentGameData));
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
        <ImgBox image={image} />
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
          <Button type="submit" onClick={onClickAddGameHandler}>
            Add to cart
          </Button>
          <Button type="submit" onClick={onClickEditGameHandler}>
            Edit
          </Button>
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
