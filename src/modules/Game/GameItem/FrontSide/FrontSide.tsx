import { PC, Playstation, Xbox } from "assets";
import { GameRating } from "modules";
import { TiTickOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { cartGamesSelector } from "redux/cart/selectors";
import { IGame } from "types/game";
import {
  Body,
  Price,
  Title,
  Icon,
  ImgBox,
  Platforms,
  Test,
  Footer,
} from "./styles";

interface IFrontSideProps {
  game: IGame;
}

const FrontSide = ({ game }: IFrontSideProps) => {
  const cart = useSelector(cartGamesSelector);

  const { _id, img, name, price, rating } = game;

  const isInCart = cart.find((cart) => cart._id === _id);

  const dataPlatforms = game.platform.map((itemPlatform: any) => ({
    name: itemPlatform,
    image:
      itemPlatform === "Playstation"
        ? Playstation
        : itemPlatform === "Xbox"
        ? Xbox
        : PC,
  }));

  return (
    <>
      <Platforms>
        {dataPlatforms.map((dataPlatform: any) => (
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
      <Footer>
        <GameRating rating={rating} />
        <Test>{isInCart && <TiTickOutline />}</Test>
      </Footer>
    </>
  );
};

export default FrontSide;
