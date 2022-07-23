import { GameItem } from "modules";
import { IGame } from "types/game/game";
import { GameListStyled } from "./styles";

interface IGameProps {
  games: IGame[];
}

const GameList = ({ games }: IGameProps) => {
  console.log(games);
  return (
    <GameListStyled display={games.length}>
      {games &&
        games.map((game: IGame) => <GameItem key={game._id} game={game} />)}
    </GameListStyled>
  );
};

export default GameList;
