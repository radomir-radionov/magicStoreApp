import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import { userCartSelector } from "redux/user/selectors";
import {
  CardStyled,
  Meta,
  Platforms,
  Score,
  NavLinkStyled,
  Price,
  Description,
  PurchaseAction,
  Snippet,
  Btn,
} from "./styles";

interface ICardProps {
  data: any;
}

const Card = ({ data }: ICardProps) => {
  const dispatch = useDispatch();
  const cartGames = useSelector(userCartSelector);
  const { id, name, slug, rating, reviews_text_count, background_image } = data;
  console.log(cartGames);
  const handleClick = () => {
    dispatch(userActions.setGameToCart(id));
  };

  const isGameInCart = cartGames.some((game: any) => game.data === id);

  return (
    <CardStyled key={id} imgUrl={background_image}>
      <Meta>
        <Platforms></Platforms>
        <Score>{rating}</Score>
      </Meta>
      <Description>
        <Snippet>
          <NavLinkStyled to={`${id}/${slug}`}>{name}</NavLinkStyled>
          <Price>{reviews_text_count}$</Price>
        </Snippet>
        {!isGameInCart && (
          <PurchaseAction>
            <Btn onClick={handleClick}>Add to Cart</Btn>
          </PurchaseAction>
        )}
      </Description>
    </CardStyled>
  );
};

export default Card;
