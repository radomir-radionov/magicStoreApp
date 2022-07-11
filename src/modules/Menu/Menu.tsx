import { pageRoutes } from "constants/pageRoutes";
import {
  Link,
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
  return (
    <MenuStyled>
      <LogoBox>
        <Logo />
        <Title>M-store</Title>
      </LogoBox>
      <NavStyled>
        <NavList>
          <NavItem>
            <Link href={pageRoutes.HOME}>Home</Link>
          </NavItem>
          <NavItem>
            <Link href={pageRoutes.USER}>User</Link>
          </NavItem>
          <NavItem>
            <Link href={pageRoutes.PRODUCT}>Product</Link>
          </NavItem>
          <NavItem>
            <Link href={pageRoutes.HOME}>About</Link>
          </NavItem>
        </NavList>
      </NavStyled>
      <Socials>12</Socials>
    </MenuStyled>
  );
};

export default Menu;
