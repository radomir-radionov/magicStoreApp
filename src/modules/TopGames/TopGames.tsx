import GameItem from "modules/GameItem/GameItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "redux/game";
import { topGamesSelector } from "redux/game/selectors";
import { IGame } from "types/game/game";
import { TopGamesStyled } from "./styles";

const TopGames = () => {
  const dispatch = useDispatch();
  const topGames = useSelector(topGamesSelector);
  console.log("topGames", topGames);

  useEffect(() => {
    if (!topGames.length) {
      dispatch(gameActions.getTopGames());
    }
  }, [dispatch, topGames]);

  return (
    <TopGamesStyled>
      {topGames.map((game: IGame) => (
        <GameItem game={game} />
      ))}
    </TopGamesStyled>
  );
};

export default TopGames;
