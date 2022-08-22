import styled from "styled-components";
import { colors, typography } from "styles";

export const NavStyled = styled.nav`
  ${typography.BODY1};
`;

export const NavList = styled.ul`
  border-top: 1px solid ${colors.BORDER_GRAY};
  color: ${colors.TEXT_GRAY};
  cursor: pointer;
`;
