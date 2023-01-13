import {
  CardStyled,
  Img,
  Info,
  Meta,
  Platforms,
  Score,
  NavLinkStyled,
  Released,
  Heading,
} from "./styles";

interface ICardProps {
  data: any;
}

const Card = ({ data }: ICardProps) => {
  const { id, name, slug, metacritic, released, background_image } = data;

  console.log(data);

  return (
    <CardStyled key={id}>
      <Img src={background_image} alt={name + "image"} />
      <Info>
        <Meta>
          <Platforms></Platforms>
          <Score>{metacritic}</Score>
        </Meta>
        <Heading>
          <NavLinkStyled to={`${id}/${slug}`}>{name}</NavLinkStyled>
          <Released>{released}</Released>
        </Heading>
      </Info>
    </CardStyled>
  );
};

export default Card;
