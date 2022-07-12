import { AnimatedTitle, Button } from "components";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
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
  const dispatch = useDispatch();

  const onClickOpenSignInModal = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
    );
  };

  return (
    <GreetingsStyled>
      <GreetingsZone>
        <AnimatedTitle />
      </GreetingsZone>
      <RegistrationZone>
        <Button onClick={onClickOpenSignInModal}>Sign in</Button>
        <Button onClick={onClickOpenSignInModal}>Sign up</Button>
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
