import {
  CardStyled,
  Meta,
  Platforms,
  Score,
  NavLinkStyled,
  Price,
  Heading,
} from "./styles";

interface ICardProps {
  data: any;
}

const Card = ({ data }: ICardProps) => {
  const { id, name, slug, rating, reviews_text_count, background_image } = data;

  return (
    <CardStyled key={id} imgUrl={background_image}>
      <Meta>
        <Platforms></Platforms>
        <Score>{rating}</Score>
      </Meta>
      <Heading>
        <NavLinkStyled to={`${id}/${slug}`}>{name}</NavLinkStyled>
        <Price>{reviews_text_count}$</Price>
      </Heading>
    </CardStyled>
  );
};

export default Card;
