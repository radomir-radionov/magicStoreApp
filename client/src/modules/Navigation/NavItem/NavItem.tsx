import pageRoutes from "constants/pageRoutes";
import { ReactNode } from "react";
import { NavItemStyled, NavLinkStyled } from "./styles";

interface INavItemProps {
  link: pageRoutes | string;
  isAuth?: any;
  action?: any;
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
