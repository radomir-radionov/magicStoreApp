import pageRoutes from "constants/pageRoutes";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modalActionTypes } from "redux/modal";
import { isAuthSelector } from "redux/user/selectors";
import {
  Logo,
  LogoBox,
  MenuStyled,
  NavItem,
  NavList,
  NavStyled,
  Socials,
  Title,
} from "./styles";

const Menu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);

  const onClickSignInModal = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
    );
  };

  return (
    <MenuStyled>
      <LogoBox>
        <Logo />
        <Title>M-store</Title>
      </LogoBox>
      <NavStyled>
        <NavList>
          <NavItem>
            <Link to={pageRoutes.HOME}>Home</Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={isAuth ? undefined : onClickSignInModal}
              to={pageRoutes.USER}
            >
              User
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={isAuth ? undefined : onClickSignInModal}
              to={pageRoutes.PRODUCT}
            >
              Product
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={isAuth ? undefined : onClickSignInModal}
              to={pageRoutes.ABOUT}
            >
              About
            </Link>
          </NavItem>
        </NavList>
      </NavStyled>
      <Socials>12</Socials>
    </MenuStyled>
  );
};

export default Menu;
