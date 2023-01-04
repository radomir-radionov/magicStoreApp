import styled from "styled-components";
import { colors, device, typography } from "styles";

export const NavStyled = styled.nav`
  display: flex;
  ${typography.BODY1};
`;

export const NavList = styled.ul`
  width: 100%;
  border-top: 1px solid ${colors.BORDER_GRAY};
  color: ${colors.TEXT_GRAY};
  cursor: pointer;

  @media (max-width: ${device.tablet}) {
    display: flex;
    gap: 2rem;
    border-top: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<any>`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 1.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${colors.GRAY};
    transition: color 0.5s;

    &:hover {
      color: ${colors.YELLOW};
    }
  }
`;
