import { Greetings, HumburgerMenu, TopGames } from "modules";
import { Header, HomeStyled, Title } from "./styles";

const Home = () => {
  return (
    <HomeStyled>
      <Greetings />
      <TopGames />
    </HomeStyled>
  );
};

export default Home;
