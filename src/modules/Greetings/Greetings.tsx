import { AnimatedTitle, Button } from "components";

import {
  GreetingsStyled,
  GreetingsZone,
  Icon,
  RegistrationZone,
  ScrollDownLeft,
  ScrollDownRight,
  TextScrollDown,
} from "./styles";

const Greetings = () => {
  return (
    <GreetingsStyled>
      <GreetingsZone>
        <AnimatedTitle />
      </GreetingsZone>
      <RegistrationZone>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </RegistrationZone>
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
