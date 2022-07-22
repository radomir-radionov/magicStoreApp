import { useDispatch } from "react-redux";
import { IGame } from "types/game/game";
import {
  Age,
  Back,
  Body,
  BoxDescription,
  Button,
  Description,
  Footer,
  Front,
  GameItemStyled,
  ImgIcon,
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
  const dateTime = new Date();
  let month = dateTime.getMonth().toString();
  if (dateTime.getMonth() < 10) {
    month = `${dateTime.getMonth()}${1}`;
  }
  let day = dateTime.getDate().toString();
  if (dateTime.getDate() < 10) {
    day = `0${dateTime.getDate()}`;
  }
  const date = `${month}/${day}/${dateTime.getFullYear()}`;
  // ----------------------------------------------------

  const onClickEditGameHandler = () => {
    // dispatch(addEditGameData(currentGameData));
    // dispatch(openModal({ type: MODAL_TYPES.EDIT_GAME_MODAL }));
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
    // name: itemPlatform,
    // image:
    //   itemPlatform === "Playstation"
    //     ? Playstation
    //     : itemPlatform === "Xbox"
    //     ? Xbox
    //     : PC,
  }));

  return (
    <GameItemStyled key={_id}>
      <Front>
        <Platforms>
          {dataPlatforms.map(
            (dataPlatform) => null
            // <ImgIcon
            //   key={dataPlatform.name}
            //   src={dataPlatform.image}
            //   alt={dataPlatform.name}
            // />
          )}
        </Platforms>
        {/* <Image image={image} /> */}
        <Body>
          <Title>{name}</Title>
          <Price>{price}$</Price>
        </Body>
        {/* <Rating value={rating} /> */}
      </Front>
      <Back>
        <BoxDescription>
          <Description>{description}</Description>
        </BoxDescription>
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
        <Footer>
          <Button type="submit" onClick={onClickAddGameHandler}>
            Add to cart
          </Button>
        </Footer>
        {/* )} */}
      </Back>
    </GameItemStyled>
  );
};

export default GameItem;
