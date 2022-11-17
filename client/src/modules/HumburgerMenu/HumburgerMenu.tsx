import { Navigation } from "modules";
import { useState } from "react";
import { useOnClickOutside } from "utils/useOnClickOutside";
import { Icon, MenuLabel, Wrapper, HumburgerMenuStyled } from "./styles";

const HumburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHandleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOnClickOutside(HumburgerMenuStyled, () => setIsMenuOpen(false));

  return (
    <HumburgerMenuStyled>
      <MenuLabel onClick={onHandleClick}>
        <Icon clicked={isMenuOpen}>&nbsp;</Icon>
      </MenuLabel>
      <Wrapper clicked={isMenuOpen}>
        <Navigation />
      </Wrapper>
    </HumburgerMenuStyled>
  );
};

export default HumburgerMenu;
