import { Button } from "components";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { userActions } from "redux/user";
import { isAuthSelector } from "redux/user/selectors";
import { AuthorizationMenuStyled } from "./styles";

const AuthorizationMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);

  const onClickSignInModal = () => {
    dispatch(modalActionTypes.openModal({ type: MODAL_TYPES.SIGN_IN_MODAL }));
  };

  const onClickSignUpModal = () => {
    dispatch(modalActionTypes.openModal({ type: MODAL_TYPES.SIGN_UP_MODAL }));
  };

  const onClickLogoutHandler = () => {
    dispatch(userActions.logout());
  };
  return (
    <AuthorizationMenuStyled>
      {!isAuth ? (
        <>
          <Button onClick={onClickSignInModal}>Sign in</Button>
          <Button onClick={onClickSignUpModal}>Sign up</Button>
        </>
      ) : (
        <Button onClick={onClickLogoutHandler}>Logout</Button>
      )}
    </AuthorizationMenuStyled>
  );
};

export default AuthorizationMenu;
