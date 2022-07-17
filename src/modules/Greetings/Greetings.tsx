import axios from "axios";
import { AnimatedTitle, Button } from "components";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { userActions } from "redux/user";
import { getIsAuthSelector } from "redux/user/selectors";
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
  const isAuth = useSelector(getIsAuthSelector);

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

  const onClickLogoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <GreetingsStyled>
      <GreetingsZone>
        <AnimatedTitle />
      </GreetingsZone>
      <RegistrationZone>
        {!isAuth ? (
          <>
            <Button onClick={onClickOpenSignInModal}>Sign in</Button>
            <Button onClick={onClickOpenSignUpModal}>Sign up</Button>
          </>
        ) : (
          <Button onClick={onClickLogoutHandler}>Logout</Button>
        )}
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
