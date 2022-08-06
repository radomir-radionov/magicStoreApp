import { GameItem, GameItemCart } from "modules";
import { IGame } from "types/game";
import { GameListStyled } from "./styles";

interface IGameProps {
  games: IGame[];
  kindOfGames?: "cartGames";
}

const GameList = ({ games, kindOfGames }: IGameProps) => {
  return (
    <GameListStyled display={games?.length}>
      {kindOfGames
        ? games &&
          games?.map((game: IGame) => (
            <GameItemCart key={game._id} game={game} />
          ))
        : games &&
          games.map((game: IGame) => <GameItem key={game._id} game={game} />)}
    </GameListStyled>
  );
};

export default GameList;
