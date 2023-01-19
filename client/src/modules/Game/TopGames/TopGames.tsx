import { Card } from "modules";
import { useSelector } from "react-redux";
import { topGamesApiSelector } from "redux/game/selectors";
import { List, Title, TopGamesStyled } from "./styles";

const TopGames = () => {
  const topGames = useSelector(topGamesApiSelector);

  return (
    <TopGamesStyled>
      <Title>Gamer's choise</Title>
      <List>
        {topGames.map((game: any) => {
          const { id } = game;
          return <Card key={id} data={game} />;
        })}
      </List>
    </TopGamesStyled>
  );
};

export default TopGames;
