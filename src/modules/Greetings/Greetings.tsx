import axios from "axios";
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

  // const exampleRequest = async () => {
  //   await axios
  //     .get(`http://localhost:5000/api/getTopProducts`)
  //     .then((res) => console.log(res));
  // };

  const onClickOpenSignInModal = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
    );
  };

  const onClickOpenSignUpModal = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.SIGN_UP_MODAL })
    );
  };

  return (
    <GreetingsStyled>
      <GreetingsZone>
        <AnimatedTitle />
      </GreetingsZone>
      <RegistrationZone>
        <Button onClick={onClickOpenSignInModal}>Sign in</Button>
        <Button onClick={onClickOpenSignUpModal}>Sign up</Button>
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
