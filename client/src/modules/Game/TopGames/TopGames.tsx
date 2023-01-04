import { useEffect } from "react";
import { GameList } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "redux/game";
import { topGamesSelector } from "redux/game/selectors";
import { Title, TopGamesStyled } from "./styles";

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
      <Title>Gamer's choise</Title>
      <GameList games={topGames} />
    </TopGamesStyled>
  );
};

export default TopGames;
