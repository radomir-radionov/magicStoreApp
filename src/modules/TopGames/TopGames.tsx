import GameItem from "modules/GameItem/GameItem";
import { Title } from "modules/Menu/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "redux/game";
import { topGamesSelector } from "redux/game/selectors";
import { IGame } from "types/game/game";
import { GameList, TopGamesStyled } from "./styles";

const TopGames = () => {
  const dispatch = useDispatch();
  const topGames = useSelector(topGamesSelector);

  useEffect(() => {
    if (!topGames.length) {
      dispatch(gameActions.getTopGames());
    }
  }, [dispatch, topGames]);

  return (
    <TopGamesStyled>
      <Title>Top Games</Title>
      <GameList>
        {topGames.map((game: IGame) => (
          <GameItem key={game._id} game={game} />
        ))}
      </GameList>
    </TopGamesStyled>
  );
};

export default TopGames;
