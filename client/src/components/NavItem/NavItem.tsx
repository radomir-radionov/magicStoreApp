import pageRoutes from "constants/pageRoutes";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { isAuthSelector } from "redux/user/selectors";
import { NavItemStyled, NavLinkStyled } from "./styles";

interface INavItemProps {
  link: pageRoutes | string;
  isAuth: any;
  action: any;
  children: ReactNode;
}

const NavItem = ({ link, isAuth, action, children }: INavItemProps) => {
  return (
    <NavItemStyled>
      <NavLinkStyled to={link} onClick={!isAuth && action}>
        {children}
      </NavLinkStyled>
    </NavItemStyled>
  );
};

export default NavItem;
