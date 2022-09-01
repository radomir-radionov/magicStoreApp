import styled from "styled-components";
import { colors, typography } from "styles";

export const NavStyled = styled.nav`
  display: flex;
  ${typography.BODY1};
`;

export const NavList = styled.ul`
  width: 100%;
  border-top: 1px solid ${colors.BORDER_GRAY};
  color: ${colors.TEXT_GRAY};
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    gap: 2rem;
    border-top: 0;
  }
`;
