import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles";

export const MenuItemStyled = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  transition: color 0.5s;

  &.active {
    color: ${colors.TEXT_VIVID_CYAN};
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
    margin-bottom: 1rem;
  }
`;
