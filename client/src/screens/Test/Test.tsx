import Card from "modules/Game/Card/Card";
import { useSelector } from "react-redux";
import { gamesApiSelector } from "redux/game/selectors";
import { TestStyled, Container, CardList } from "./styles";

const Test = () => {
  const games = useSelector(gamesApiSelector);
  console.log(games);
  return (
    <TestStyled>
      <Container>
        <h1>Responsive column card Example</h1>
        <h2>Resize the screen to see the below cards resize themselves</h2>
        {/* <CardList>
          {games.map((game: any) => {
            const { id, ...data } = game;
            console.log("games:", game);
            return <Card key={id} data={data} />;
          })}
        </CardList> */}
      </Container>
    </TestStyled>
  );
};

export default Test;
