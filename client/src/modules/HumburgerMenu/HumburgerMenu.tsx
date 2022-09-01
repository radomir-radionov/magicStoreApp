import { Navigation } from "modules";
import { useState } from "react";
import { useOnClickOutside } from "utils/useOnClickOutside";
import { Icon, MenuLabel, Wrapper, Test } from "./styles";

const HumburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHandleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOnClickOutside(Test, () => setIsMenuOpen(false));

  return (
    <Test>
      <MenuLabel onClick={onHandleClick}>
        <Icon clicked={isMenuOpen}>&nbsp;</Icon>
      </MenuLabel>
      <Wrapper clicked={isMenuOpen}>
        <Navigation />
      </Wrapper>
    </Test>
  );
};

export default HumburgerMenu;
