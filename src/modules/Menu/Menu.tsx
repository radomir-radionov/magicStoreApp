import { Navigation } from "modules";

import { Logo, LogoBox, MenuStyled, Socials, Title } from "./styles";

const Menu = () => {
  return (
    <MenuStyled>
      <LogoBox>
        <Logo />
        <Title>M-store</Title>
      </LogoBox>
      <Navigation />
      <Socials>12</Socials>
    </MenuStyled>
  );
};

export default Menu;
