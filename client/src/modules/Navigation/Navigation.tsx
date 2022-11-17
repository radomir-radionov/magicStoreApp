import pageRoutes from "constants/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector, userIdSelector } from "redux/user/selectors";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { modalActionTypes } from "redux/modal";
import { NavItem } from "components";
import { NavList, NavStyled } from "./styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const isAuth = useSelector(isAuthSelector);

  const onClickSignInModal = () => {
    dispatch(modalActionTypes.openModal({ type: MODAL_TYPES.SIGN_IN_MODAL }));
  };

  return (
    <NavStyled>
      <NavList>
        <NavItem
          link={pageRoutes.HOME}
          isAuth={isAuth}
          action={onClickSignInModal}
        >
          Home
        </NavItem>
        <NavItem
          link={`profile/${userId}`}
          isAuth={isAuth}
          action={onClickSignInModal}
        >
          Profile
        </NavItem>
        <NavItem
          link={pageRoutes.PRODUCT}
          isAuth={isAuth}
          action={onClickSignInModal}
        >
          Product
        </NavItem>
        <NavItem
          link={pageRoutes.ABOUT}
          isAuth={isAuth}
          action={onClickSignInModal}
        >
          About
        </NavItem>
      </NavList>
    </NavStyled>
  );
};

export default Navigation;
