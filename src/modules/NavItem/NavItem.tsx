import pageRoutes from "constants/pageRoutes";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { isAuthSelector } from "redux/user/selectors";
import { NavItemStyled, NavLinkStyled } from "./styles";

interface INavItemProps {
  link: pageRoutes;
  children: ReactNode;
}

const NavItem = ({ link, children }: INavItemProps) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);

  const onClickSignInModal = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
    );
  };

  return (
    <NavItemStyled>
      <NavLinkStyled
        onClick={!isAuth ? onClickSignInModal : undefined}
        to={link}
      >
        {children}
      </NavLinkStyled>
    </NavItemStyled>
  );
};

export default NavItem;
