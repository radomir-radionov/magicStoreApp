import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles";

export const NavItemStyled = styled.li`
  border-bottom: 1px solid ${colors.BORDER_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 0.5s;

  &.active {
    color: ${colors.TEXT_VIVID_CYAN};
  }
`;
