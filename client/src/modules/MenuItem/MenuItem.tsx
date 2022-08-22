import pageRoutes from "constants/pageRoutes";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { MenuItemStyled, NavLinkStyled } from "./styles";

interface IMenuItemProps {
  link: pageRoutes | string;
  children: ReactNode;
  Icon: IconType;
}

const MenuItem = ({ link, children, Icon }: IMenuItemProps) => {
  return (
    <MenuItemStyled>
      <NavLinkStyled to={link}>
        <Icon />
        {children}
      </NavLinkStyled>
    </MenuItemStyled>
  );
};

export default MenuItem;
