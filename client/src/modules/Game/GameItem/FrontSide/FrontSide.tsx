import { PC, Playstation, Xbox } from "assets";
import { GameRating } from "modules";
import { TiTickOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { userCartSelector } from "redux/user/selectors";
import { IGame } from "types/game";
import {
  Body,
  Price,
  Title,
  Icon,
  ImgBox,
  Platforms,
  IconWrapper,
  Footer,
} from "./styles";

interface IFrontSideProps {
  game: IGame;
}

const FrontSide = ({ game }: IFrontSideProps) => {
  const cart = useSelector(userCartSelector);

  const { _id, img, name, price, rating } = game;

  const isInCart = cart?.find((cart) => cart._id === _id);

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
        <IconWrapper>{isInCart && <TiTickOutline />}</IconWrapper>
      </Footer>
    </>
  );
};

export default FrontSide;
