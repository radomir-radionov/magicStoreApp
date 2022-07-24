import styled from "styled-components";
import { colors, typography } from "styles";

export const MenuStyled = styled.menu`
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 13rem;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${colors.BACKGROUND_DARK_GRAY};
`;

export const LogoBox = styled.div`
  background-color: ${colors.BACKGROUND_BLACK};
`;

export const Logo = styled.img``;

export const Title = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  ${typography.H2};
`;

export const NavStyled = styled.nav`
  ${typography.BODY1};
`;

export const Socials = styled.div``;

export const NavList = styled.ul`
  border-top: 1px solid ${colors.BORDER_GRAY};
  color: ${colors.TEXT_GRAY};
  cursor: pointer;
`;

export const NavItem = styled.li`
  border-bottom: 1px solid ${colors.BORDER_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
    transition: color 0.3s;
  }
`;

export const Link = styled.a``;
