import { Greetings, HumburgerMenu, TopGames } from "modules";
import { Header, HomePageStyled, Title } from "./styles";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Greetings />
      <TopGames />
    </HomePageStyled>
  );
};

export default HomePage;
