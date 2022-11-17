import { Greetings, TopGames } from "modules";
import { HomeStyled } from "./styles";

const Home = () => {
  return (
    <HomeStyled>
      <Greetings />
      <TopGames />
    </HomeStyled>
  );
};

export default Home;
