import { Greetings, TopGames } from "modules";

import { HomePageStyled } from "./styles";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Greetings />
      <TopGames />
    </HomePageStyled>
  );
};

export default HomePage;
