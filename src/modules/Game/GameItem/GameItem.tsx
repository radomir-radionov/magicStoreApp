import { IGame } from "types/game";
import BackSide from "./BackSide/BackSide";
import FrontSide from "./FrontSide/FrontSide";
import { FrontSideWrapper, BackSideWrapper, GameItemStyled } from "./styles";

interface IGameItemProps {
  game: IGame;
}

const GameItem = ({ game }: IGameItemProps) => {
  return (
    <GameItemStyled>
      <FrontSideWrapper>
        <FrontSide game={game} />
      </FrontSideWrapper>
      <BackSideWrapper>
        <BackSide game={game} />
      </BackSideWrapper>
    </GameItemStyled>
  );
};

export default GameItem;
