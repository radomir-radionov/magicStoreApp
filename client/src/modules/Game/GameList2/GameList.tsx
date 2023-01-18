import { GameItem, GameItemCart } from "modules";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { IGame } from "types/game";
import { GameListStyled } from "./styles";

interface IGameProps {
  games: IGame[];
  kindOfGames?: "cartGames";
}

const GameList = ({ games, kindOfGames }: any) => {
  return (
    <GameListStyled display={games?.length}>
      {games.map((game: any) => {
        // return <GameCard></GameCard>;
      })}
    </GameListStyled>
  );
};

export default GameList;
