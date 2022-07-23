import { EmptyStar, Star } from "assets";
import { GameRatingStyled, Img, RatingItem } from "./styles";

interface IGameRatingProps {
  rating: number;
}

const GameRating = ({ rating }: IGameRatingProps) => {
  const values = [1, 2, 3, 4, 5];

  return (
    <GameRatingStyled>
      {values.map((value) => (
        <RatingItem key={value}>
          {rating >= value ? (
            <Img src={EmptyStar} alt="Empty star" />
          ) : (
            <Img src={Star} alt="Star" />
          )}
        </RatingItem>
      ))}
    </GameRatingStyled>
  );
};

export default GameRating;
