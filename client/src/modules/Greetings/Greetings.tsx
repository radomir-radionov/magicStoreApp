import { AnimatedTitle } from "components";
import { AuthorizationMenu } from "modules";
import {
  GreetingsStyled,
  ScrollDownLeft,
  ScrollDownRight,
  TextScrollDown,
  Icon,
} from "./styles";

const Greetings = () => {
  return (
    <GreetingsStyled>
      <AnimatedTitle />
      <AuthorizationMenu />
      <ScrollDownRight>
        <TextScrollDown>scroll down</TextScrollDown>
        <Icon />
      </ScrollDownRight>
      <ScrollDownLeft>
        <TextScrollDown>scroll down</TextScrollDown>
        <Icon />
      </ScrollDownLeft>
    </GreetingsStyled>
  );
};

export default Greetings;
